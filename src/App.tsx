import "./styles/global.sass";
import Home from "./pages/Home";
import { DrawerProvider } from "./context/drawerContext";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <DrawerProvider>
        <Home />
      </DrawerProvider>
    </div>
  );
}

export default App;
