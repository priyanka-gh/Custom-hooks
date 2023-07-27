import { useState, useEffect } from 'react';

export const useIdle = (timeout = 3000) => {
  const [isIdle, setIsIdle] = useState(false);


  useEffect(() => {
    
  let idleTimeout;

  const handleUserActivity = () => {
    if (isIdle) {
      setIsIdle(false);
    }

    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => setIsIdle(true), timeout);
  };
  
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, []);

  return isIdle;
};

