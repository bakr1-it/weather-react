import {useLanguage} from "../context/LanguageContext"

        import axios from "axios";

         const api=import.meta.env.VITE_OPENWEATHER_API_KEY;
            const baseUrl= `https://api.openweathermap.org/data/2.5/weather`;
        
export async function getData(nameCity = "london", lang ="ar" ){
if(nameCity.trim()=="" ){
throw new Error("city is not found")
}
 

try{

const response = await axios.get(baseUrl,
   {
params:{
   q:nameCity,
   appid:api,
   units:"metric",
   lang:lang


}
 }
   )
   return writeData(response);
}catch (error) {
  if (error.response?.status === 404) {
    throw new Error("apiCityNotFound");
  } else if (error.response?.status === 401) {
    throw new Error("apiUnauthorized");
  } else if (error.request) {
    throw new Error("apiNetworkError");
  } else {
    throw new Error("apiUnknownError");
  }
}




}
export async function getDataWithCoords(lat ,lon , lang="ar",signal){
if (!lat || !lon) {
    throw new Error("Coordinates are required");
  }

try{
const reponse= await axios.get(baseUrl,{
   params:{
         lat:lat,
         lon:lon,
         appid:api,
         units:"metric",
         lang:lang
   },
   signal
})
  return writeData(reponse);
}catch (error) {
    if (error.name === "CanceledError" || error.name === "AbortError") {
      throw error;
    }

    if (error.response?.status === 404) {
      throw new Error("Location not found, please try again.");
    } else if (error.response?.status === 401) {
      throw new Error("Invalid API key or unauthorized access.");
    } else if (error.request) {
      throw new Error("Network error: Please check your internet connection.");
    } else {
      throw new Error(error.message || "Oops, an error occurred. Please try again.");
    }
  
}




}



            function writeData(city){
const obj=city?.data;
                return{
            temp: obj?.main.temp,
            feels_like: obj?.main?.feels_like,
            humidity: obj?.main?.humidity,
            temp_min: obj?.main?.temp_min,
            temp_max: obj?.main?.temp_max,
            name: obj?.name,
            description: obj?.weather[0]?.description,
            main: obj?.weather[0]?.main,
            icon: obj?.weather[0]?.icon,
            wind_speed: obj?.wind?.speed,
            wind_deg: obj?.wind?.deg,



                
            }


            }


export async function getCitySearch( signal,city= "london" ,count=5 , lang="ar" ){

   const baseUrl=`https://geocoding-api.open-meteo.com/v1/search`;
 const result = await   axios.get(baseUrl , {
   params:{
      "name":city,
      "count":count,
      "language":lang,
      "format":"json",


   },
   signal
 });
 return result;
}
