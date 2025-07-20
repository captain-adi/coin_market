
import { usegetCoinList, usegetTrendingCoins } from "@/hooks/query";
import { AgGridReact } from "ag-grid-react";
import type { ICellRendererParams, ValueFormatterParams } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-material.css';
import SparklineRenderer from "@/components/sparkline";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useTheme } from "@/components/themeProvider";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
function TrendingCurrency() {
  const { theme } = useTheme();
   ModuleRegistry.registerModules([AllCommunityModule]);
  const { data, isLoading } = usegetTrendingCoins();
  const {data : coinData} = usegetCoinList();
const navigate = useNavigate();

  // Map trending coins to coinData for sparkline
  const trendingCoins = data?.coins.map((coinWrapper, index) => {
    const coin = coinWrapper.item;
    const fullCoin = coinData?.find((c: any) => c.id === coin.id);
    return {
      ...coin,
      rank: index + 1,
      symbol: coin.symbol.toUpperCase(),
      sparkline_in_7d: fullCoin?.sparkline_in_7d || { price: [] },
    };
  }) || [];


  if (isLoading) {
    return <div>Loading...</div>;
  }

  const columnDefs = [
    {
      headerName: "#",
      cellRenderer: (params: ICellRendererParams) => (
        <div className="flex items-center gap-2.5">
          <Star className="h-4" />
          <span>{params.data.market_cap_rank}</span>
        </div>
      ),
      sortable: true,
      field: "market_cap_rank",
      width: 90,
    },
    {
      headerName: "Coin",
      cellRenderer: (params: ICellRendererParams) => (
        <span className="flex gap-2 items-center">
          <img src={params.data.small} className="h-4" alt={params.data.name} />
          {params.data.name}
          <span className="text-muted-foreground">({params.data.symbol})</span>
        </span>
      ),
      sortable: true,
      field: "name",
      flex: 1,
    },
    {
      headerName: "Price (BTC)",
      field: "price_btc",
      sortable: true,
      flex: 1,
      valueFormatter: (params: ValueFormatterParams) => `${Number(params.value).toFixed(8)} BTC`,
    },
    {
      headerName: "Market Cap Rank",
      field: "market_cap_rank",
      sortable: true,
      flex: 1,
    },
    {
      headerName: '7d Trend',
      cellRenderer: (params: ICellRendererParams) => (
        <SparklineRenderer value={params.data?.sparkline_in_7d?.price || []} />
      ),
      tooltipComponent: null,
      tooltipValueGetter: () => '',
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-2xl font-bold"  >Top Trending Cryptocurrencies Today</h2>
          <p className="text-muted-foreground">Discover the top trending cryptocurrencies on CoinGecko. This list is sorted by coins that are most searched for in the last 3 hours. Non-Playable Coin, Ethena, and Ethereum are the top 3 trending crypto now. In the past 24 hours, the price of Non-Playable Coin changed by 5.2%, Ethena price changed by 21.6%, and Ethereum price changed by 5.2%</p>
        </div>
    <div className={`ag-theme-material-${theme} ` } style={{ height: 750, width: "100%" }}>
    <AgGridReact
        rowData={trendingCoins}
        columnDefs={columnDefs}
        suppressCellFocus={true}
        getRowClass={() => "my-row"}
        onCellClicked={(params) => {
          if (params.data?.id) {
            navigate(`/coins/${params.data.id}`);
          }
        }}
        />
    </div>
        </div>
  );
}

export default TrendingCurrency;
