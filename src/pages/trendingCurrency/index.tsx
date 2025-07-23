import { usegetCoinList, usegetTrendingCoins } from "@/hooks/query";
import { AgGridReact } from "ag-grid-react";
import type { ICellRendererParams, ValueFormatterParams, ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-theme-material.css';
import SparklineRenderer from "@/components/sparkline";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useTheme } from "@/components/themeProvider";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ITrendingCoinItem } from "@/types/trendingCoins";

ModuleRegistry.registerModules([AllCommunityModule]);

// Use existing types with extended properties for the grid
type TrendingGridData = ITrendingCoinItem['item'] & {
  rank: number;
  sparkline_in_7d: { price: number[] };
};

type TrendingCoinParams = ICellRendererParams<TrendingGridData>;
type TrendingCoinValueParams = ValueFormatterParams<TrendingGridData>;

function TrendingCurrency() {
  const { theme } = useTheme();
  const { data, isLoading } = usegetTrendingCoins();
  const { data: coinData } = usegetCoinList();
  const navigate = useNavigate();

  // Map trending coins to coinData for sparkline
  const trendingCoins = data?.coins.map((coinWrapper: ITrendingCoinItem, index) => {
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

  const columnDefs: ColDef<TrendingGridData>[] = [
    {
      headerName: "#",
      cellRenderer: (params: TrendingCoinParams) => (
        <div className="flex items-center gap-2.5">
          <Star className="h-4" />
          <span>{params.data?.rank}</span>
        </div>
      ),
      sortable: true,
      field: "rank",
      width: 90,
    },
    {
      headerName: "Coin",
      cellRenderer: (params: TrendingCoinParams) => (
        <span className="flex gap-2 items-center">
          <img src={params.data?.small} className="h-4" alt={params.data?.name} />
          {params.data?.name}
          <span className="text-muted-foreground">({params.data?.symbol})</span>
        </span>
      ),
      sortable: true,
      field: "name",
      flex: 1,
    },
    {
      headerName: "Price",
      field: "price_btc",
      sortable: true,
      flex: 1,
      valueFormatter: (params: TrendingCoinValueParams) => 
        params.value ? `${Number(params.value).toFixed(8)} BTC` : 'N/A',
    },
    {
      headerName: "Market Cap Rank",
      field: "market_cap_rank",
      sortable: true,
      flex: 1,
      valueFormatter: (params: TrendingCoinValueParams) => 
        params.value ? `#${params.value}` : 'N/A',
    },
    {
      headerName: '7d Trend',
      cellRenderer: (params: TrendingCoinParams) => (
        <SparklineRenderer value={params.data?.sparkline_in_7d?.price || []} />
      ),
      tooltipComponent: null,
      tooltipValueGetter: () => '',
      field: 'sparkline_in_7d'
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl font-bold">Top Trending Cryptocurrencies Today</h2>
        <p className="text-muted-foreground">
          Discover the top trending cryptocurrencies on CoinGecko. This list is sorted by coins that are most searched for in the last 3 hours.
        </p>
      </div>
      <div className={`ag-theme-material-${theme}`} style={{ height: 750, width: "100%" }}>
        <AgGridReact<TrendingGridData>
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
