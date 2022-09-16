import React, { createContext } from "react";
import useHooks from "../hooks/useHooks";

export const ServicesContext = createContext();

const ServiceProvider = ({ children }) => {
  const allData = useHooks();
  return (
    <ServicesContext.Provider value={allData}>
      {children}
    </ServicesContext.Provider>
  );
};

export default ServiceProvider;
