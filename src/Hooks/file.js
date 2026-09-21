export function useLoadingSound() {
  // نحتفظ بمرجع العقد الصوتية حتى نستطيع إيقافها لاحقاً
  const activeNodesRef = useRef(null);

  const startPulse = () => {
    // إذا كان هناك صوت يعمل بالفعل، لا تبدأ صوتاً ثانياً فوقه
    if (activeNodesRef.current) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // نغمة رادار دافئة ومنخفضة (200Hz) لتكون مريحة وغير مزعجة
    osc.type = 'sine'; // موجة جيبية ناعمة جداً
    osc.frequency.setValueAtTime(200, ctx.currentTime);

    // نحدد مستوى خافت جداً حتى لا يضايق المستخدم أثناء الانتظار
    gain.gain.setValueAtTime(0.04, ctx.currentTime);

    // توصيل المسار: osc -> gain -> destination
    osc.connect(gain);
    gain.connect(ctx.destination);

    // تشغيل المولد بدون تحديد زمن إيقاف stop!
    osc.start();

    // نحتفظ بالمرجع في الـ ref لنستطيع الوصول إليه عند إيقاف التحميل
    activeNodesRef.current = { ctx, osc, gain };
  };

  const stopPulse = () => {
    // إذا لم يكن هناك صوت يعمل، لا تفعل شيئاً
    if (!activeNodesRef.current) return;

    const { ctx, osc, gain } = activeNodesRef.current;

    // تلاشٍ ناعم خلال 100 ميلي ثانية لمنع الطقطقة
    const stopTime = ctx.currentTime + 0.1;
    gain.gain.exponentialRampToValueAtTime(0.001, stopTime);
    osc.stop(stopTime);

    // تفريغ المرجع لتجهيزه للمرة القادمة
    activeNodesRef.current = null;
  };

  return { startPulse, stopPulse };
}