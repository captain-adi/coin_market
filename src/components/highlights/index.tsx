import { ChevronRight, Flame, TrendingUp, ChevronsUp, ChevronsDown } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { usegetTrendingCoins, usegetCoinList } from "@/hooks/query";
import HighlightSkeleton from "@/skelton/HighlightSkeleton";
import type { ITrendingCoinsResponse, ITrendingCoinItem } from "@/types/trendingCoins";
import { Link } from "react-router-dom";

function HighLights() {
  const { data, isLoading }: { data: ITrendingCoinsResponse | undefined, isLoading: boolean } = usegetTrendingCoins();
  const { data: coinListData } = usegetCoinList();

  if (isLoading) {
    return (
      <HighlightSkeleton/>
    );
  }

  // Get top 3 trending coins from API data
  const trendingCoins = data?.coins?.slice(0, 3).map((coinWrapper: ITrendingCoinItem) => {
    const coin = coinWrapper.item;
    // Find the corresponding coin in the coin list to get USD price and percentage change
    const coinWithChange = coinListData?.find((c) => c.id === coin.id);
    
    return {
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      price: coinWithChange?.current_price || coin.price_btc.toFixed(8),
      icon: coin.small,
      rank: coin.market_cap_rank,
      score: coin.score,
      percentageChange: coinWithChange?.price_change_percentage_24h || null,
      isUsdPrice: !!coinWithChange,
    };
  }) || [];
  return (
     <Card className="  md:w-[400px] rounded-xl shadow-lg">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 font-semibold text-base">
            <Flame className="w-5 h-5 text-orange-500" />
            Trending
          </div>
          <Link to={"/coins/trending"}>
          <button className="text-sm  hover:text-green-400 flex items-center">
            View more <ChevronRight className="w-4 h-4 ml-1" />
          </button>
          </Link>
        </div>

        <div className="space-y-4">
          {trendingCoins.map((coin, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={coin.icon}
                  alt={coin.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium">{coin.name}</span>
                <span className="text-sm font-light">({coin.symbol})</span>
              </div>
              <div className="text-right flex ">
                <div className="font-semibold">
                  {coin.isUsdPrice ? `$${coin.price.toLocaleString()}` : `${coin.price}`}
                </div>
                <div className="text-muted-foreground text-sm flex items-center justify-end   ">
                  {coin.percentageChange !== null ? (
                    <>
                      {coin.percentageChange >= 0 ? (
                        <ChevronsUp className="h-4 text-green-500" />
                      ) : (
                        <ChevronsDown className="h-4 text-red-500" />
                      )}
                      <span className={coin.percentageChange >= 0 ? "text-green-500" : "text-red-500"}>
                        {coin.percentageChange.toFixed(2)}%
                      </span>
                    </>
                  ) : (
                    <>
                      <TrendingUp className="w-3 h-3 text-orange-500" />
                      <span className="text-orange-500">Trending</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default HighLights;
