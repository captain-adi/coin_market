import { usegetCoinList } from "@/hooks/query"
import MarketRow from "../marketRow";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";


function CoinList() {
  ModuleRegistry.registerModules([AllCommunityModule]);
    const {data:coins,isLoading,isError}=usegetCoinList();
   if(isLoading){
    return <div>Loading.....</div>
   }

  return (
   <>
  <MarketRow/>


   </>
  )
}

export default CoinList
