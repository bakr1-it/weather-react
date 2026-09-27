import { useEffect, useState } from "react";
import { getCitySearch } from "../services/weatherService";
import useDebounce from "../services/useDebounce";
import {useLanguage} from "../context/LanguageContext"
export default function useCitySearch(query,delay=400) {
    const {t}=useLanguage();
const [result,setResult]=useState([]);
const [error,setError]= useState(null);
const [isLoading,setIsLoading]=useState(false);


const dataQuery=useDebounce(query)
useEffect(()=>{
    const controller = new AbortController();
if (!dataQuery || typeof dataQuery !== "string" || dataQuery.trim().length < 2){
    setIsLoading(false);
    setResult([]);
    return

}
async function fetchCity(){
    setError(null);
    setIsLoading(true);
try{
const data = await getCitySearch(controller.signal , dataQuery);

setResult(data.data?.results || [])
}catch(error){
setResult([]);
if(error.name== "CanceledError" || error.name =="AbortError")
     setError(t(error.message));
}
finally{
    setIsLoading(false);

}

}
fetchCity();
return ()=>controller.abort()

},[dataQuery])


return {result , error , isLoading};
}
