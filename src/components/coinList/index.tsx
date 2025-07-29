import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ICellRendererParams, ValueFormatterParams, ColDef } from 'ag-grid-community';
import { usegetCoinList } from "@/hooks/query";
import 'ag-grid-community/styles/ag-theme-material.css';
import { Star } from "lucide-react";
import { useTheme } from "../themeProvider";
import SparklineRenderer from '@/components/sparkline'
import { useNavigate } from "react-router-dom";
import type { ICoin } from "@/types";
import './index.css';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { useIsMobileOrTablet } from "@/utils/Screen";
type CoinParams = ICellRendererParams<ICoin>;
type CoinValueParams = ValueFormatterParams<ICoin>;
ModuleRegistry.registerModules([AllCommunityModule]);

function CoinList() {
  const isMobile = useIsMobileOrTablet();
  const { data: rowData, isLoading } = usegetCoinList();
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Memoize columnDefs to fix mobile/desktop layout issue
  const columnDefs: ColDef<ICoin>[] = useMemo(() => [
    { 
      headerName: "#", 
      pinned: isMobile ? "left" : undefined,
      cellRenderer: (params: CoinParams) => (
        <div className="flex items-center gap-0.5 md:gap-2.5">
          <Star className="h-3 md:h-4"/>
          <span>{params.data?.market_cap_rank}</span>
        </div>
      ), 
      width: 80,
      field: 'market_cap_rank'
    },
    {
      headerName: "Coin",
      pinned: isMobile ? "left" : undefined,
      cellRenderer: (params: CoinParams) => (
        <span className="flex gap-2 items-center">
          <img src={params.data?.image} alt={params.data?.name} className="h-4"/>
          {params.data?.name}{" "}
          <span className="text-muted-foreground">
            ({params.data?.symbol.toUpperCase()})
          </span>
        </span>
      ),
      width: isMobile ? 200 : undefined,
      field: 'name',
    },
    {
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(), 
      headerName: "Price",
      field: 'current_price',
    },
    {   
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(), 
      headerName: "Market Cap",
      field: 'market_cap',
    },
    {
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(),   
      headerName: "24h Volume",
      field: 'total_volume',
    },
    {
      headerName: '7d Trend',
      cellRenderer: (params: CoinParams) => (
        <SparklineRenderer value={params.data?.sparkline_in_7d?.price || []} />
      ),
      tooltipComponent: null,
      tooltipValueGetter: () => '',
      field: 'sparkline_in_7d',
    }
  ], [isMobile]); 

  // Add loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-muted-foreground">Loading coins...</div>
      </div>
    );
  }

  return (
    <div className={`ag-theme-material-${theme}`} style={{ height: "600px", width: "100%" }}>
      <AgGridReact<ICoin>
        rowData={rowData}
        columnDefs={columnDefs}
        suppressCellFocus={true} 
        defaultColDef={{
          flex: isMobile ? undefined : 1,
          sortable: true,
        }}
        rowClass="custom-row"
        getRowClass={() => "my-row"}
        onCellClicked={(params) => {
          if (params.data?.id) {
            navigate(`/coins/details/${params.data.id}`)
          }
        }}
      />
    </div>
  );
}

export default React.memo(CoinList);