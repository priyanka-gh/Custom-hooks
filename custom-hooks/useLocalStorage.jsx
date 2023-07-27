import React,{useState, useEffect} from 'react'

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
        const valueFromLocalStorage = localStorage.getItem(key)
            if(valueFromLocalStorage){
                setValue(valueFromLocalStorage)
            }
    },[key])

    const setValueInLocalStorage = (newValue) => {
        localStorage.setItem(key, newValue)
        setValue(newValue)
    }

    return {
        value,
        setValueInLocalStorage
    }
}
