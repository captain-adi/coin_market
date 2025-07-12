import { Search } from "lucide-react";
import { Input } from "../ui/input";
import Logo from "./components/Logo";
import Profile from "./components/Profile";

function Header() {
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
          <span className="text-pink-300 text-sm font-medium">🍬 Candy</span>
         <Profile/>

          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="pl-8 pr-10 bg-zinc-800 text-zinc-300 placeholder:text-zinc-400 border-none rounded-md focus-visible:ring-0"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
            <div className="absolute right-2 top-2 bg-zinc-700 px-1.5 py-0.5 rounded text-xs text-zinc-400">
              /
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
