import { usegetCoinList } from "@/hooks/query"
import MarketRow from "../marketRow";


function CoinList() {
    const {data:coins,isLoading,isError}=usegetCoinList();
   if(isLoading){
    return <div>Loading.....</div>
   }

  return (
   <>
   {coins?.map((coin) => (
  <MarketRow key={coin.id} coin={coin} />
))}

   </>
  )
}

export default CoinList
