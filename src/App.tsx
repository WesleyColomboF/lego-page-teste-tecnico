import "./styles/global.sass";
import Home from "./pages/Home";
import { DrawerProvider } from "./context/drawerContext";

function App() {
  return (
    <DrawerProvider>
      <Home />
    </DrawerProvider>
  );
}

export default App;
