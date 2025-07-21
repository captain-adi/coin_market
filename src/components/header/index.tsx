
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import { Switch } from "../ui/switch";
import { useTheme } from "../themeProvider";
import SearchCoin from "../searchCity";

function Header() {
  const { theme, setTheme } = useTheme();
  // Function to toggle theme
    const toggleTheme = ()=>{
    setTheme(theme === "dark" ? 'light' : "dark")
  }
  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-6 text-sm text-zinc-300 font-medium">
            <span className="cursor-pointer hover:text-white">
              Cryptocurrencies
            </span>
            <span className="cursor-pointer hover:text-white">Exchanges</span>
            <span className="cursor-pointer hover:text-white">NFT</span>
            <span className="cursor-pointer hover:text-white">Learn</span>
            <span className="cursor-pointer hover:text-white">Products</span>
            <span className="cursor-pointer hover:text-white">API</span>
          </div>
        </div>

        {/* Right Section: Candy, Portfolio, Search */}
        <div className="flex items-center gap-4">
           <span className='text-muted-foreground font-bold flex justify-center items-center gap-3'>{theme === 'dark' ? "Light Mode" : "Dark Mode "}<Switch onClick={toggleTheme} className=''/></span> 
         <Profile/>

          {/* Search Input */}
          <SearchCoin/>
        </div>
      </div>
    </header>
  );
}

export default Header;
