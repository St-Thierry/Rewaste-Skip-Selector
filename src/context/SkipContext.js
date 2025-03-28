import { createContext, useContext, useState } from "react";

// Create Context
const SkipContext = createContext();

// Custom Hook for easier usage
export const useSkip = () => {
  return useContext(SkipContext);
};

// Provider Component
export const SkipProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  // Function to update selected skip
  const selectSkip = (skip) => {
    setSelectedSkip(skip);
  };

  return (
    <SkipContext.Provider value={{ selectedSkip, selectSkip }}>
      {children}
    </SkipContext.Provider>
  );
};
