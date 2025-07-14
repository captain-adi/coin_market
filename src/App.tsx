import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/themeProvider";
import { Separator } from "@/components/ui/separator";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="  min-h-screen m-auto  flex flex-col  ">
        <Separator className="w-screen mt-0.5" />
        <Header />
        <Separator className="w-screen mt-0.5" />

        <main>
          
        <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
