import { useState, useEffect } from 'react';

export const useCurrentTime = (updateInterval = 1000) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval]);

  return currentTime;
};