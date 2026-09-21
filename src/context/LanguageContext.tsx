import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../locales/translations";
import {useSound} from "../Hooks/useSound.js"
type lang = "ar" | "en";
interface TypePropsFromContext{
    language:lang,
    toggleChangeLang:()=>void,
    t:(key:string)=>string
}

const LanguageContext = createContext <TypePropsFromContext |null>(null);

export default function LanguageProvider({children} :{children:React.ReactNode}){
    const {playSound} = useSound();
    const [language,setLanguage]=useState<lang> (()=>{
 const lang= localStorage.getItem("lang");
return  lang== "ar" || lang == "en" ?lang: "ar";
    });
useEffect(()=>{
    document.documentElement.dir = language =="ar"?"rtl":"ltr";
    localStorage.setItem("lang",language);
},[language])
function toggleChangeLang (){
    playSound("lang")
    setLanguage((prev)=>prev =="ar" ? "en":"ar")
};
const t =(key:string)=>{
return (translations[language] as any)?.[key];
}

return (
    <LanguageContext.Provider value={{language,toggleChangeLang,t}} >
        {children}
    </LanguageContext.Provider>
)
}
export const useLanguage = () => {
    const useLangContext = useContext(LanguageContext);
    if (!useLangContext) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return useLangContext;
};

