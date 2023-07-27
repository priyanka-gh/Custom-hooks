import { useState, useEffect } from 'react';

export const useCountdown = (endTime) => {
  const calculateRemainingTime = () => {
    const remainingTime = endTime - Date.now();
    return Math.max(remainingTime, 0);
  };

  const [countdown, setCountdown] = useState(calculateRemainingTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return countdown;
};

