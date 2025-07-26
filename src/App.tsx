import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import { ThemeProvider } from "./components/themeProvider";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/sidebar";
function App() {
  return (
    <SidebarProvider defaultOpen={false}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="  min-h-screen m-auto px-4 flex flex-col  ">
          <SidebarTrigger className="lg:hidden" />
          <Separator />
          <Header />
         <AppSidebar className="lg:hidden" />
          <Separator className="w-screen mt-0.5" />
          <main>
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
}

export default App;
