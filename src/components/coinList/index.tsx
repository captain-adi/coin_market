import { AgGridReact } from "ag-grid-react";
import type { ICellRendererParams, ValueFormatterParams, ColDef } from 'ag-grid-community';
import { usegetCoinList } from "@/hooks/query";
import 'ag-grid-community/styles/ag-theme-material.css';
import { Star } from "lucide-react";
import { useTheme } from "../themeProvider";
import  SparklineRenderer from '@/components/sparkline'
import { useNavigate } from "react-router-dom";
import type { ICoin } from "@/types";
import React from "react";
import './index.css';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
type CoinParams = ICellRendererParams<ICoin>;
type CoinValueParams = ValueFormatterParams<ICoin>;
ModuleRegistry.registerModules([AllCommunityModule]);
  function CoinList() {


  const { data: rowData } = usegetCoinList();
const navigate = useNavigate();
  const columnDefs: ColDef<ICoin>[] = [
      { 
        headerName: "#", 
        cellRenderer: (params: CoinParams) => {
          return (
            <div className="flex items-center gap-2.5">
              <Star className="h-4"/>
              <span>{params.data?.market_cap_rank}</span>
            </div>
          );
        }, 
        sortable: true,
        field: 'market_cap_rank'
      },
    {
      headerName: "Coin",
      cellRenderer: (params: CoinParams) => {
        return (
          <span className="flex gap-2 items-center">
            <img src={params.data?.image} alt={params.data?.name} className="h-4"/>
            {params.data?.name}{" "}
            <span className="text-muted-foreground">
              ({params.data?.symbol.toUpperCase()})
            </span>
          </span>
        );
      },
      sortable: true,
      field: 'name',
    },
    {
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(), 
      headerName: "Price",
      field: 'current_price',
      sortable: true,
    },
    {   
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(), 
      headerName: "Market Cap",
      field: 'market_cap',
      sortable: true,
    },
    {
      valueFormatter: (p: CoinValueParams) => "$" + p.value?.toLocaleString(),   
      headerName: "24h Volume",
      field: 'total_volume',
      sortable: true,
    },
    {
      headerName: '7d Trend',
      cellRenderer: (params: CoinParams) => (
        <SparklineRenderer value={params.data?.sparkline_in_7d?.price || []} />
      ),
      tooltipComponent: null,
      tooltipValueGetter: () => '',
      field: 'sparkline_in_7d'
    }
  ];
const {theme} = useTheme()
  return (
    <>
      <div className={`ag-theme-material-${theme}`} style={{ height: "100vh", width: "100%" }}>
        <AgGridReact<ICoin>
          rowData={rowData}
          columnDefs={columnDefs}
          suppressCellFocus={true} 
           rowClass="custom-row"
          getRowClass={() => "my-row"}
          onCellClicked={(params) => {
            if (params.data?.id) {
              navigate(`/coins/${params.data.id}`)
            }
          }}
        />
      </div>
    </>
  );
}

  export default React.memo(CoinList);