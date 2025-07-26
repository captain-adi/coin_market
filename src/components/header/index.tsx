import Logo from "./components/Logo";
import Profile from "./components/Profile";
import { useTheme } from "../themeProvider";
import SearchCoin from "../searchCity";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

function Header() {
  const { theme, setTheme } = useTheme();
  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header>
      <div className="container mx-auto p-4 flex justify-between md:gap-12">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <Logo />
          </div>

          {/* Nav Links */}
          <div className="hidden  lg:flex gap-3 text-sm  font-medium">
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
          </div>
        </div>

        {/* Right Section: Candy, Portfolio, Search */}

        {/* here i want to show moon and sun icon based on theme */}

        <div className="flex items-center gap-4">
          {/* Theme Switch */}
          <div onClick={toggleTheme} className="cursor-pointer">
            {theme === "dark" ? (
              <div>
                <Moon className="animate-[spin_0.5s_linear] [transform:rotate(360deg)]" />
              </div>
            ) : (
              <Sun className="animate-[spin_0.5s_linear] [transform:rotate(0deg)] text-yellow-500" />
            )}
          </div>

          {/* <span className='text-muted-foreground font-bold flex justify-center items-center gap-3'>{theme === 'dark' ? "Light Mode" : "Dark Mode "}<Switch onClick={toggleTheme} className=''/></span>  */}
          <Profile />

          {/* Search Input */}
          <SearchCoin />
        </div>
      </div>
    </header>
  );
}

export default Header;
