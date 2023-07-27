import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  const setToggleDarkMode =() =>{
    setDarkMode((prev) => !prev)
  }

  useEffect(() => {
    const body = document.body;

    if(darkMode){
        body.style.backgroundColor = "black"
        body.style.color = "white"
    }
    else{        
        body.style.backgroundColor = "white"
        body.style.color = "black"
    }
    },[darkMode])

  return {darkMode, setToggleDarkMode}
};


