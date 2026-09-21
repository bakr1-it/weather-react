

import FooterWather from "@/components/common/FooterWather"
import IconOpenWeather from "@/components/common/IconOpenWeather"

import {useLanguage} from "../../context/LanguageContext"

export default function Wather({city}:{city:any}) {
  const {t} =useLanguage();

  return (
<section className=' w-full px-4  py-2 md:py-8'>


<section className='relative mx-auto w-full max-w-lg md:max-w-2xl overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/20 p-6 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/40'>


<div className='flex justify-between items-center'>

<div className="header flex w-full  justify-between px-2 font-sans text-sm font-semibold text-slate-700 dark:text-slate-200 space-y-1">
<div className='city'>
  <h1 className='text-slate-500'><span>📍</span>{city?.name}</h1>
  <p className='text-md font-bold tracking-tighter'> {city?.description}</p>
  
  </div>
<div className='status space-y-1 '>
  <p className='text-end text-slate-500'>{t("wind")} </p>
  <p className='font-bold dark:text-slate-300 text-slate-800 text-md ' dir='rtl'>
    <span>{city?.wind_deg}°</span>
    <span>/</span>
    <span>{city?.wind_speed}</span>

    <span> {t("speedUnit")}</span> 
  </p>
</div>



</div>
<div className="grid">

</div>
<div className="footer">

</div>
</div>

<div className="flex justify-center items-center h-80 flex-col gap-2">
  <h1 className='text-8xl md:text-9xl text-slate-900 font-extralight dark:text-white tracking-tighter'>37</h1>
<IconOpenWeather icon={city?.icon} />

</div>

<footer className="footer grid grid-cols-2 md:grid-cols-4 border border-white/40 bg-white/20 py-4  backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900/40 rounded-xl shadow-xl md:divide-x rtl:md:divide-x-reverse">

<FooterWather 
    typeMark={t("highLow")} 
    mark={`${city?.temp_max}° / ${city?.temp_min}°`} 
  />
  <FooterWather 
    typeMark={t("feelsLike")} 
    mark={`${city?.feels_like}°`} 
  />
  <FooterWather 
    typeMark={t("humidity")} 
    mark={`${city?.humidity}%`} 
  />
  <FooterWather 
    typeMark={t("windSpeed")} 
    mark={`${city?.wind_speed} ${t("speedUnit")}`} 
  />



</footer>
</section>




</section>

  )
}
