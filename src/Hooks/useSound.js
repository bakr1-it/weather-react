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

export function useLoadingSound(){
const loadingSound =useRef(null);
const startLoadingSound  =()=>{

  if(loadingSound.current) return;
const AudioContextLoadingSound = new (window.AudioContext || window.webkitAudioContext) ();
const sound = AudioContextLoadingSound.createOscillator();
const gain = AudioContextLoadingSound.createGain();

sound.frequency.setValueAtTime(300,AudioContextLoadingSound.currentTime);
gain.gain.setValueAtTime(0.10  , AudioContextLoadingSound.currentTime);
sound.connect(gain);
gain.connect(AudioContextLoadingSound.destination);
sound.start();
loadingSound.current = {gain , sound ,AudioContextLoadingSound}


}; 
const closeLoadingSound = ()=>{

if(!loadingSound.current) return;
const {gain , sound ,AudioContextLoadingSound} = loadingSound.current;
gain.gain.exponentialRampToValueAtTime(0.001 , AudioContextLoadingSound.currentTime + 0.3);
sound.stop(AudioContextLoadingSound.currentTime + 0.2); 
loadingSound.current=null;

}


return {startLoadingSound , closeLoadingSound}


}
