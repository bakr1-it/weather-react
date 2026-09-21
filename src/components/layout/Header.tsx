import { useEffect, useState } from 'react'
import InputSearch from "@/components/common/InputSearch"
import Button from "@/components/common/Button"
import LogoLight from "~/icons/logoLight.svg"
import LogoDark from "~/icons/logoDark.svg"
import {useLanguage} from "../../context/LanguageContext"
import {useSound} from "../../Hooks/useSound.js"


interface TypeProps
{
  getSearch:(city:string)=>void,
  showModalForLocation:()=>void,
  fetchWeatherForLocation:()=>void,

}
export default function Header({getSearch,showModalForLocation,fetchWeatherForLocation}:TypeProps) {

const {t,toggleChangeLang} =useLanguage();
const {playSound} = useSound();
    // use state for theme
    const [theme,setTheme]= useState(localStorage.getItem("theme") || "dark");
    //  function handel change theme
useEffect(()=>{
  const root = document.documentElement;
  root.setAttribute("data-theme",theme);
  localStorage.setItem("theme",theme);

},[theme])


    function handelChangeDarkLight(){
playSound("theme");
setTheme((prevTheme)=> prevTheme== "dark"?"light":"dark");
    }
  return (
    <>
    
    <header className=' 
    sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-3
                   bg-weather-surface-light/80 dark:bg-weather-surface-dark/80 
                   
                   backdrop-blur-md
                   border-b border-glass-light dark:border-glass-dark 
                   transition-colors duration-300  '>
<div className='max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3'>


<div className="flex items-center justify-between w-full md:w-auto gap-4">
  

  <div className="flex items-center gap-2 cursor-pointer select-none">
    <img 
      src={theme === "dark" ? LogoLight : LogoDark} 
      alt="WeatherOS" 
      className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-105" 
    />
  </div>


  <div className="flex items-center gap-2">

    <Button fun={showModalForLocation} >
    {t("locationMe")}
    </Button>


    <Button fun={toggleChangeLang} >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-translate" viewBox="0 0 16 16">
        <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
        <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
      </svg>
    </Button>

    <Button fun={handelChangeDarkLight}>
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
          <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
        </svg>
      )}
    </Button>
  </div>

</div>

<div className='w-full lg:w-96 md:w-72'>
    
    <InputSearch getSearch={getSearch} fetchWeatherForLocation={fetchWeatherForLocation}/>
</div>


</div>





    </header>

    </>
)
}
