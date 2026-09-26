import { useRef ,useCallback } from "react";
 const SOUND_REGISTRY = {
  click: {
    wave: 'sine',
    freqStart: 800,
    freqEnd: 250,
    duration: 0.03,
    volume: 0.06,
  },

  theme: {
    wave: 'sine',
    freqStart: 600,
    freqEnd: 320,
    duration: 0.04,
    volume: 0.05,
  },

  lang: {
    wave: 'triangle',
    freqStart: 450,
    freqEnd: 550,
    duration: 0.035,
    volume: 0.05,
  },

  search: {
    wave: 'sine',
    freqStart: 300,
    freqEnd: 600,
    duration: 0.04,
    volume: 0.05,
  },
};
export function useSound() {
  const playSound = useCallback((sound) => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const ctx = new AudioContextClass();
      const config = SOUND_REGISTRY[sound];
      if (!config) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = config.wave;
      osc.frequency.setValueAtTime(config.freqStart, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(
        Math.max(config.freqEnd, 1),
        ctx.currentTime + config.duration
      );

      gain.gain.setValueAtTime(config.volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + config.duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + config.duration);
    } catch {

    }
  }, []);

  return { playSound };
}




