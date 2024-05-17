import React, { ReactNode, createContext, useContext, useState } from "react";

interface DrawerContextData {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextData | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    console.log("toggleDrawer");
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};
