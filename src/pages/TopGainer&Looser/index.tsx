import { useTheme } from "@/components/themeProvider";
import { usegetCoinList } from "@/hooks/query";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-theme-material.css';
import { AllCommunityModule, ModuleRegistry , type ColDef, type ICellRendererParams } from "ag-grid-community";
import type { ICoin, ICoinList } from "@/types";
import { useNavigate } from "react-router-dom";

ModuleRegistry.registerModules([AllCommunityModule]);
function TopGainerAndLoosers() {
  const { data, isLoading }: { data?: ICoinList; isLoading: boolean } = usegetCoinList();
  const { theme } = useTheme();
  const navigate = useNavigate();
 
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;

  const topGainers: ICoinList = data.filter(
    (coin : ICoin) => coin.price_change_percentage_24h > 0
  );
  const topLosers: ICoinList = data.filter((coin : ICoin) => coin.price_change_percentage_24h < 0);

  const columnDefs: ColDef<ICoin>[] = [
    { headerName: "Coin", field: "name" , cellRenderer:(params : ICellRendererParams<ICoin>)=>{
      return (
        <div className="flex items-center gap-2">
          <img src={params.data?.image} alt={params.data?.name} className="h-4" />
          <span>{params.data?.name}</span>
        </div>
      )
    } },
    { headerName: "Price Change (24h)", field: "price_change_percentage_24h" , valueFormatter: (params) => `${params.value.toFixed(2)}%` },
    { headerName: "Market Cap", field: "market_cap", valueFormatter: (params) => `$${params.value.toLocaleString()}` },
    { headerName: "Current Price", field: "current_price", valueFormatter: (params) => `$${params.value.toLocaleString()}` },
  ];

  return (
    <div className="container mx-auto px-4 mt-12 flex flex-col justify-center gap-3 h-full  md:flex-row
     ">
      <div className={`ag-theme-material-${theme} flex flex-col gap-3.5`} style={{ height: "600px", width: "100%" }} >
        <h2 className="text-3xl font-bold ">Top Gainers</h2>
        <AgGridReact<ICoin> columnDefs={columnDefs} 
        defaultColDef={{
          flex: 1
        }}
        onCellClicked={(params)=>{
          if (params.data) {
            navigate(`/coins/details/${params.data.id}`);
          }
        }} rowData={topGainers} modules={[AllCommunityModule]} />
      </div>
      <div className={`ag-theme-material-${theme} flex flex-col gap-3.5 w-full md:max-h-1/2`} style={{ height: "800px" }}>
        <h2 className="text-3xl font-bold ">Top Losers</h2>
        <AgGridReact<ICoin> columnDefs={columnDefs}
        defaultColDef={{
          flex: 1
        }} rowData={topLosers} modules={[AllCommunityModule]} />
      </div>
    </div>
  );
}

export default TopGainerAndLoosers;
