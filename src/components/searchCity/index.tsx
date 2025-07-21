import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Input } from "../ui/input";
import { useState } from "react";
import { usegetCoinSearch } from "@/hooks/query";
import type { ISearch } from "@/types/searchTypes";
import { useNavigate } from "react-router-dom";

function SearchCoin() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState<string>("");
    const navigate = useNavigate();
    
    const { data }: { data: ISearch | undefined } = usegetCoinSearch(query);
    console.log("Search Results:", data);

  return (
    <div>
      <div className="relative" onClick={() => setOpen(true)}>
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
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput
            placeholder="Search for cryptocurrencies..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {data?.coins && data.coins.length > 0 && (
              <CommandGroup heading="Cryptocurrencies">
                {data.coins.slice(0, 10).map((coin) => (
                  <CommandItem
                  value={coin.name}
                    key={coin.id}
                    onSelect={() => {
                      setOpen(false);
                      navigate(`/coins/${coin.id}`);
                    }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <img 
                      src={coin.thumb} 
                      alt={coin.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{coin.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {coin.symbol.toUpperCase()} #{coin.market_cap_rank}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </CommandDialog>
    
    </div>
  );
}

export default SearchCoin;
