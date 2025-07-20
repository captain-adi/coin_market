import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { usegetCoinChartData, usegetCoinDetails } from "@/hooks/query";
import { useParams } from "react-router-dom";
import { ArrowUp, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CoinLinks from "./components/CoinLinks";

import { format } from "date-fns";
import PriceChart from "./components/PriceChart";
import CoinDetailsSkeleton from "@/skelton/CoinDetailsSkeleton";

function CoinDetails() {
  const { coinname } = useParams();

  const { data, isFetching } = usegetCoinDetails(coinname);
  const {data:chartData}  = usegetCoinChartData(coinname! , 30);
  const chartDataFormatted = chartData?.prices.map((item: [number, number]) => ({
    time: format(new Date(item[0]), "yyyy-MM-dd"),
    price: item[1],
  }));

  if (isFetching) {
    return <CoinDetailsSkeleton/>;
  }

  return (
    <div className="container mx-auto p-4 flex gap-3 ">
      <Card className="w-full max-w-md bg-background text-foreground rounded-2xl shadow-xl p-4">
        <CardContent className="space-y-4">
          <div className="flex gap-2">
        <User />
        <CardTitle className="text-lg font-semibold">
          {data?.name} {data?.symbol?.toUpperCase()} Price
        </CardTitle>
        <Badge variant="outline" className="text-xs">
          #{data?.market_cap_rank ?? "-"}
        </Badge>
          </div>
          {/* Price Section */}
          <div className="flex">
        <div className="text-4xl font-bold">
          {data?.market_data?.current_price?.usd
            ? `$${data.market_data.current_price.usd.toLocaleString()}`
            : "-"}
        </div>
        <div className="flex items-center gap-1 text-green-500 text-sm">
          <ArrowUp className="h-4" />
          <span>
            {data?.market_data?.price_change_percentage_1y_in_currency?.usd
          ? `${data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)}%`
          : "-"}
          </span>
          <span>(1y)</span>
        </div>
          </div>
          <div className="text-xs text-muted-foreground">
        1.00000 {data?.symbol?.toUpperCase()} = {data?.market_data?.price_change_percentage_24h?.toFixed(2) ?? "0.00"}%
          </div>

          {/* Progress bar */}
          <div>
        <Progress
          value={
            data?.market_data?.current_price?.usd && data?.market_data?.low_24h?.usd && data?.market_data?.high_24h?.usd
          ? ((data.market_data.current_price.usd - data.market_data.low_24h.usd) /
              (data.market_data.high_24h.usd - data.market_data.low_24h.usd)) *
            100
          : 0
          }
          className="h-2 bg-muted"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>
            {data?.market_data?.low_24h?.usd
          ? `$${data.market_data.low_24h.usd.toLocaleString()}`
          : "-"}
          </span>
          <span>24h Range</span>
          <span>
            {data?.market_data?.high_24h?.usd
          ? `$${data.market_data.high_24h.usd.toLocaleString()}`
          : "-"}
          </span>
        </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-2 mt-2 text-sm flex flex-col gap-1.5">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Market Cap</span>
          <span>
            {data?.market_data?.market_cap?.usd
          ? `$${data.market_data.market_cap.usd.toLocaleString()}`
          : "-"}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Fully Diluted Valuation
          </span>
          <span>
            {data?.market_data?.fully_diluted_valuation?.usd
          ? `$${data.market_data.fully_diluted_valuation.usd.toLocaleString()}`
          : "-"}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-muted-foreground">24 Hour Trading Vol</span>
          <span>
            {data?.market_data?.total_volume?.usd
          ? `$${data.market_data.total_volume.usd.toLocaleString()}`
          : "-"}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-muted-foreground">Circulating Supply</span>
          <span>
            {data?.market_data?.circulating_supply
          ? data.market_data.circulating_supply.toLocaleString()
          : "-"}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-muted-foreground">Total Supply</span>
          <span>
            {data?.market_data?.total_supply
          ? data.market_data.total_supply.toLocaleString()
          : "-"}
          </span>
        </div>
        <Separator />
        <div className="flex justify-between">
          <span className="text-muted-foreground">Max Supply</span>
          <span>
            {data?.market_data?.max_supply
          ? data.market_data.max_supply.toLocaleString()
          : "-"}
          </span>
        </div>
        <Separator />
          </div>
          <CoinLinks data={data?.links} />
        </CardContent>
      </Card>
        <Card className="bg-background h-full  w-full">
          <CardTitle className="text-xl  px-4 pt-4">Overview</CardTitle>
          <CardContent className="px-4 ">
           <PriceChart data={chartDataFormatted || []}/>
           <Card className="bg-background mt-4 ">
            <CardTitle className="text-xl px-4 pt-4">Description</CardTitle>
            <CardContent className="px-4 pb-4">
              <div className="mb-1">About Bitcoin (BTC)</div>
              <p className="text-sm text-muted-foreground">
                {data?.description.en || "No description available."}
              </p>
            </CardContent>
           </Card>
          </CardContent>
        </Card>
    </div>
  );
}

export default CoinDetails;
