import {useEffect} from 'react'
import IconLoad from "./IconLoad"
import {useLoadingSound} from "../../Hooks/useSound.js"
export default function Loading() {

  const {startLoadingSound,closeLoadingSound  } =  useLoadingSound();
  useEffect(()=>{
startLoadingSound()
return ()=>closeLoadingSound()
  },[startLoadingSound, closeLoadingSound])
  return (
    <div className='fixed inset-0 overflow-hidden  min-h-[100vh] flex justify-center  items-center bg-weather-glass w-full z-50  '>
  
  <section className=' '>
    <IconLoad />
  </section>
    </div>
  )
}
