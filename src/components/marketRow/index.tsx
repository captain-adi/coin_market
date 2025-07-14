import { AgGridReact } from "ag-grid-react";
import { usegetCoinList } from "@/hooks/query";
import "./index.css";
import 'ag-grid-community/styles/ag-theme-material.css';
import { Star } from "lucide-react";
import { useTheme } from "../themeProvider";

  function MarketRow() {
  const { data: rowData } = usegetCoinList();

  const columnDefs = [
      { headerName: "#", cellRenderer: (params) => {return(<div className="flex  items-center gap-2.5"><Star className="h-4"/><span>{params.data.market_cap_rank}</span></div>)}, sortable: true ,field : "market_cap_rank"},
    {
      headerName: "Coin",
      cellRenderer: (params) => {
        return (
          <span className="flex gap-2 items-center">
            <img src={params.data.image}  className="h-4"/>
            {params.data.name}{" "}
            <span className="text-muted-foreground">
              ({params.data.symbol.toUpperCase()})
            </span>
          </span>
        );
      },
      sortable: true,
       field: "name",
    },

    {
      valueFormatter:  p => "$" + p.value.toLocaleString(), 
      headerName: "Price",
      field: "current_price",
      sortable: true,
    },
    {   valueFormatter:  p => "$" + p.value.toLocaleString(), 
      headerName: "Market Cap",
      field: "market_cap",
      sortable: true,
    },
    {
        valueFormatter:  p => "$" + p.value.toLocaleString(),   
      headerName: "24n Valume",
      field: "total_volume",
      sortable: true,
    },
  ];
const {theme} = useTheme()
  return (
    <>
      <div className={`ag-theme-material-${theme}`} style={{ height: 500, width: "100%" }}>
        <AgGridReact
          rowClass="bg-red-400"
          rowData={rowData}
          columnDefs={columnDefs}
          getRowClass={() => "my-row"}
        />
      </div>
    </>
  );
}

export default MarketRow;
