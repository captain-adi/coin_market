import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useEffect, useState } from "react";
import { usegetCoinSearch } from "@/hooks/query";
import type { ISearch } from "@/types/searchTypes";
import { useNavigate } from "react-router-dom";
import React from "react";

function SearchCoin() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
 
  const navigate = useNavigate();

  
  useEffect(() => {

    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);


  const { data }: { data?: ISearch } = usegetCoinSearch(
    debouncedQuery.length > 1 ? debouncedQuery : "",
   
  );


  return (
    <div>
      <button
      
        className="relative w-full text-left pl-8 pr-10 py-2 bg-zinc-100 text-muted-foreground text-sm placeholder:text-zinc-400 border-none rounded-md focus-visible:ring-0 dark:bg-zinc-800 dark:text-zinc-300 dark:placeholder:text-zinc-400"
        onClick={() => setOpen(true)}
        type="button"
      >
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
        <span className="">Search Cryptocurrency ...</span>
        <span className="absolute right-2 top-2 bg-zinc-700 px-1.5 py-0.5 rounded text-xs text-zinc-400">/</span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search for cryptocurrencies..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {debouncedQuery.length > 0 && debouncedQuery.length < 2 && (
            <div className="px-4 py-2 text-sm text-muted-foreground">
              Type at least 2 characters to search
            </div>
          )}
          <CommandEmpty>No cryptocurrencies found.</CommandEmpty>
          {data?.coins && data.coins.length > 0 && (
            <CommandGroup heading="Cryptocurrencies">
              {data.coins.slice(0, 8).map((coin) => (
                <CommandItem
                  value={coin.name}
                  key={coin.id}
                  onSelect={() => {
                    setOpen(false);
                    setQuery("");
                    navigate(`/coins/${coin.id}`);
                  }}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <img 
                    src={coin.thumb} 
                    alt={coin.name}
                    className="w-6 h-6 rounded-full"
                    loading="lazy"
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

export default React.memo(SearchCoin);
