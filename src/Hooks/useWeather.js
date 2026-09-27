

import { useEffect, useState } from "react";
import { getData ,getDataWithCoords } from "../services/weatherService";
import {useLanguage} from "../context/LanguageContext"

const cacheWeather = new Map();
export function useWeather(city="london"){
const {t,language}=useLanguage();
const [data , setData] = useState(null);
const [error,setError] = useState(null);
const [isLoading,setIsLoading] = useState(false);

const fetchWeather= async ( city)=>{
    if(cacheWeather.has(city.toLowerCase())){
        setData(cacheWeather.get(city.toLowerCase()));
        return;
    
    }

    setIsLoading(true);
    setError(null);
try{
const result= await getData(city,language);
setData(result);
cacheWeather.set(city.toLowerCase() , result);
}catch(err){
setError(t(error.message));
setData(null);
}
finally{
    setIsLoading(false);
}
} ;

const fetchWeatherForLocation = async (lat , lon)=>{
 setIsLoading(true);
    try{
    const data=await  getDataWithCoords(lat,lon);
setData(data);
 }catch(error){
setData(null);
setError(error.message);




 }finally{
    setIsLoading(false);
 }



}
useEffect(()=>{
fetchWeather(city);
},[])


return {
    data,
isLoading,
    error,
    fetchWeather,
    setError,
    fetchWeatherForLocation

}






}