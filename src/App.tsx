import Header from '@/components/layout/Header'
import DotDark from '@/components/layout/DotDark'
import Wather from '@/components/layout/Wather'
import Error from '@/components/common/Error.js'
import Loading from '@/components/common/Loading.js'
import "../src/services/weatherService.js"
import './index.css'
import { useWeather } from "../src/Hooks/useWeather.js"
import ModalLocation from "@/components/common/ModalLocation"
import { useEffect, useState } from 'react'

import {useSound} from "./Hooks/useSound.js"
function App() {

    const {error,data,isLoading , fetchWeather ,fetchWeatherForLocation,setError} = useWeather();

const {playSound} = useSound();


    const [showLoading,setShowLoading]= useState(false);
  function handelShowLoading(){
    setShowLoading((prevShowLoading)=> !prevShowLoading);
  }
   const [selectLocation, setSelectLocation] = useState<number[]>([]);
useEffect(()=>{

if(selectLocation.length <2 ) return;

fetchWeatherForLocation(...selectLocation);

},[selectLocation])

  const [showModel,setShowModel]= useState(false);

function hideModalForLocation (){
    playSound("click");
    setShowModel(false);
}
  function showModalForLocation (){
    playSound("click");
    setShowModel(true);  }
  function getSearch(city:string){
   fetchWeather(city);
  
  }
  

return (
    <section className='w-full'>

      {isLoading && <Loading />}
 <Header getSearch={getSearch} showModalForLocation={showModalForLocation} fetchWeatherForLocation={fetchWeatherForLocation} />
<DotDark />

{error ?<Error message={error} hideModel={()=>setError(null)}/>:
<Wather city={data}/> 
}
      
 {showModel && <ModalLocation hideModalForLocation={hideModalForLocation} setSelectLocation={setSelectLocation} onError={(msg: any) => setError(msg)} handelShowLoading={handelShowLoading} />}

    

{showLoading && <Loading />}

    </section>

  )
}

export default App
