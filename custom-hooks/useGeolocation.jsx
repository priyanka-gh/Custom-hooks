import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [pos, setPos] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setPos({ latitude, longitude, error: null });
    };

    const failure = (error) => {
      setPos({ latitude: null, longitude: null, error: error.message });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      setPos((prev) => ({
        ...prev,
        error: "Geolocation not supported in your browser",
      }));
    }
  }, []);

  return pos;
};
