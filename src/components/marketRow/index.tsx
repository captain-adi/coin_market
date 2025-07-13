import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { ICoin } from "@/types";
import { ArrowUp, ArrowDown } from "lucide-react";

function MarketRow({ coin }: { coin: ICoin }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b dark:bg-black">
      {/* Left: Star, Rank, Logo, Name */}
      <div className="flex items-center gap-4 w-[300px]">
        <span className="text-muted-foreground">⭐</span>
        <span className="text-sm w-4">{coin.market_cap_rank}</span>
        <Avatar className="w-6 h-6">
          <AvatarImage src={coin.image} alt={coin.name} />
        </Avatar>
        <div className="text-white font-semibold text-sm">
          {coin.name} <span className="text-muted-foreground uppercase text-xs">{coin.symbol}</span>
        </div>
      </div>

      {/* Buy Button */}
      <Button variant="outline" size="sm" className="text-green-500 border-green-500 hover:bg-green-100">
        Buy
      </Button>

      {/* Current Price */}
      <div className="text-white font-medium">${coin.current_price.toLocaleString()}</div>

      {/* 1h, 24h, 7d Change (Dummy Values or Use Your Data) */}
      <div className="flex gap-3 text-sm">
        <div className="text-green-500 flex items-center gap-1">
          <ArrowUp className="w-3 h-3" /> 0.0R
        </div>
        <div className="text-red-500 flex items-center gap-1">
          <ArrowDown className="w-3 h-3" /> 0.0%
        </div>
        <div className="text-green-500 flex items-center gap-1">
          <ArrowUp className="w-3 h-3" />{coin.price_change_percentage_24h}
        </div>
      </div>

      {/* Market Cap and Volume */}
      <div className="text-muted-foreground text-sm">${coin.market_cap.toLocaleString()}</div>
      <div className="text-muted-foreground text-sm">${coin.total_volume.toLocaleString()}</div>

      {/* Sparkline (optional) */}
      {/* You can use a chart library like Chart.js, Recharts, or sparkline SVG */}
    </div>
  );
}

export default MarketRow;
