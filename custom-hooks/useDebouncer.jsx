import React,{useState, useEffect} from 'react'
import axios from "axios";

export const useDebouncer = (inputVal, apiURL, debounceTime = 2000) => {
  
    const[data, setData] = useState(null)

    useEffect(() => {
      let timeout;

      const fetchData = async() => {
        try{
            const response = await axios.get(apiURL);
            setData(response.data);
        }
        catch(error){
            console.log("Error fetching data ",error)
        }
      }
      if(inputVal){
        clearTimeout(timeout)
        timeout = setTimeout(fetchData, debounceTime)
      }
      //cleanup function
      return () => clearTimeout(timeout)
    },[inputVal, apiURL, debounceTime])
    
    return data
}
