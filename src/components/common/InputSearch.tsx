import Button from "@/components/common/Button";
import { useEffect, useMemo, useState } from "react";


import useCitySearch from "../../Hooks/useCitySearch.js"
import {useLanguage} from "../../context/LanguageContext"

interface TypeProps{
  getSearch:(mes:any)=>void
  fetchWeatherForLocation:(lan:number ,long:number )=>void,

}

export default function InputSearxh({getSearch,fetchWeatherForLocation}:TypeProps) {
  const {t} =useLanguage();


  function removeCityIsDublcate(citys:any){
    if(   !Array.isArray(citys) ||  citys?.length=== 0  ){
return [];
    }
const arrMap = new Map();

citys.forEach((city)=>{

const key = `${city.name?.trim().toLowerCase()}-${city?.country?.trim().toLowerCase()}`
if(!arrMap.has(key)){
  arrMap.set(key,city);
}


}  )
return Array.from(arrMap?.values());
  }
  const [search,setSearch]=useState("");
  const {result } = useCitySearch(search);
const cities= useMemo(()=>{
  return removeCityIsDublcate(result);
},[result])


 
  const [openCity,setOpenCity]=useState(false);
/* 
todo get city when click 
*/
function handelgetCity(lat:number,long:number){

 
  if(!lat && !long) return ;

 
fetchWeatherForLocation(lat,long);

setSearch("");
setOpenCity(false);
}

/*
! end get city when click 
*/

  useEffect(()=>{setOpenCity(result?.length >0 ?  true:false)},[result])
return (
<section className="relative w-full">

<form onSubmit={(e) =>{
  e.preventDefault()
  getSearch(search);

}

} className="relative flex items-center w-full gap-4">
      

      <span className="absolute start-3 text-slate-400 dark:text-slate-400 pointer-events-none flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1Custom98zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </span>


      <input 
        type="search"
        dir="auto"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder={t("searchPlaceholder")} 
        className="w-full h-10 ps-9 pe-20 rounded-xl text-xs sm:text-sm
                   bg-white/70 dark:bg-theme-storm/70
                   text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-400
                   border border-slate-200/80 dark:border-white/10
                   backdrop-blur-md
                   focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-500/50
                   focus:bg-white dark:focus:bg-theme-storm/95
                   transition-all duration-200 ease-out"
      />




      
      <Button >
       {t("search")}
      </Button>
        </form>  
        
{openCity && 

<div 
className="list-city absolute top-full  mt-2 w-full z-50 
                bg-white/90 dark:bg-slate-900/90 
                backdrop-blur-xl 
                border border-slate-200/60 dark:border-white/10 
                shadow-2xl shadow-black/20 
                rounded-2xl px-4 py-2 overflow-hidden"
>
{result?.length> 1 && 
<div className="flex flex-col divide-y dark:divide-slate-700 divide-slate-200" >
{cities.map((item)=>{
  return (

<button onClick={()=>handelgetCity(item.latitude,item.longitude)}  key={item.id} className="w-full cursor-pointer dark:hover:bg-theme-marine rounded-sm hover:bg-slate-100/40  font-semibold text-l py-1 hover:scale-105" ><span>{item.name} - {item.country}</span></button>
  )
}

)}

</div>
}


</div>

}
      


  


</section>


  )
}
