import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Topbar from "./components/topbar";
import { ThemeProvider } from "./components/themeProvider";
import { Separator } from "@/components/ui/separator";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="  min-h-screen m-auto  flex flex-col  ">
        <Topbar />
        <Separator className="w-screen mt-0.5" />
        <Header />
        <main>
          
        <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
