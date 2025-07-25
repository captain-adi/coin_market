
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import { Switch } from "../ui/switch";
import { useTheme } from "../themeProvider";
import SearchCoin from "../searchCity";
import { Link } from "react-router-dom";

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
          <div className="hidden md:flex gap-6 text-sm  font-medium">
            <Link to="/">
              <span className="cursor-pointer hover:text-muted-foreground">
                Cryptocurrencies
              </span>
            </Link>
            <Link to="/coins/trending">
              <span className="cursor-pointer hover:text-muted-foreground">
                Trending
              </span>
            </Link>
            <Link to="/coins/topgainers-and-loosers">
              <span className="cursor-pointer hover:text-muted-foreground">
              Top Gainers & Losers
              </span>
            </Link>
        
            <Link to={"/coin"}>
              <span className="cursor-pointer hover:text-muted-foreground">
                API
              </span>
            </Link>
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
