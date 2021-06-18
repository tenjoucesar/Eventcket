import React, { createContext, useEffect, useState } from 'react';

export const DeviceContext = createContext({});

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState(undefined);

  useEffect(() => {
    const handleResize = () => updateDevice();
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const updateDevice = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setDevice('mobile');
    } else if (width >= 768 && width < 992) {
      setDevice('tablet');
    } else if (width >= 992 && width < 1440) {
      setDevice('desktop');
    } else if (width >= 1440) {
      setDevice('largeDesktop');
    }
  }

  return (
    <DeviceContext.Provider
      value={{
        device,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
