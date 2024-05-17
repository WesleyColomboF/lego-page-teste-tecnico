import React, {
  ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import Drawer from "../organisms/drawer/Drawer";

interface DrawerContextData {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextData | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const toggleDrawer = () => {
    console.log("toggleDrawer");
    ref.current?.animate([{ transform: "tranlate(0,0)" }]);
    setIsOpen(!isOpen);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, toggleDrawer }}>
      {children}
      <Drawer forwardRef={ref} />
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
