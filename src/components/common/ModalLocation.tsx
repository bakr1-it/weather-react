
import Button from './Button'
import {useLanguage} from "../../context/LanguageContext"


interface TypeProps{
  hideModalForLocation:()=>void,
  setSelectLocation:(coords:number[])=>void,
  handelShowLoading:()=>void,
onError: (msg: any) => void,
  
};
export default function ModalLocation({hideModalForLocation , setSelectLocation,handelShowLoading,onError} : TypeProps) {
  const {t} =useLanguage();

function handelGetGps(){
  handelShowLoading()
navigator.geolocation.getCurrentPosition((postion)=>{
  const lat= postion.coords.latitude;
  const lon= postion.coords.longitude;
  setSelectLocation([lat,lon]);
  
  hideModalForLocation()
  handelShowLoading()

} , 
(error) =>{
    handelShowLoading()
      hideModalForLocation()
 if (error.code === error.PERMISSION_DENIED) {
          onError(t("geoPermissionDenied"));
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          onError(t("geoPositionUnavailable"));
        } else if (error.code === error.TIMEOUT) {
          onError(t("geoTimeout"));
        }
}

)
}
  return (
    <>
<div 

  className={`fixed inset-0 z-50 flex  items-center justify-center p-4 bg-slate-200/60 backdrop-blur-sm transition-opacity duration-300 `}
  role="dialog"
  aria-modal="true"
>
<div className='relative mx-auto w-full max-w-lg md:max-w-xl overflow-hidden rounded-2xl border  border-white/40 bg-white/20 p-6 md:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-900'>
<div className="text font-serif  text-xl flex justify-center items-center ">
<h1>{t("locationPrompt")}</h1>
</div>
<div className={`action flex gap-3 mt-2 `}>
<Button classes='px-6' fun={hideModalForLocation}>
{t("cancel")}
</Button>
<Button classes='px-6' fun={handelGetGps}> 
    {t("confirm")}
</Button>
</div>
</div>
</div>

</>
  )
}
