import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { usegetCoinDetails } from "@/hooks/query";
import { useParams } from "react-router-dom"
import { ArrowUp, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CoinLinks from "./components/CoinLinks";


function CoinDetails() {
  const  {coinname} = useParams();

  const {isLoading,data,isFetching} = usegetCoinDetails(coinname)

  if(isFetching){
    return <h1>fetching..........</h1>
  }
  

  return (
    <div className="container mx-auto p-4 flex ">

   
     <Card className="w-full max-w-md bg-background text-foreground rounded-2xl shadow-xl p-4">
  
    

      <CardContent className="space-y-4"> 
        <div className="flex   gap-2">        
        <User/>
          <CardTitle className="text-lg font-semibold">Bitcoin BTC Price</CardTitle>
          <Badge variant="outline" className=" text-xs">#1</Badge>
        </div>
        {/* Price Section */}
        <div className="flex">
          <div className="text-4xl font-bold">$119,403</div>
          <div className="flex items-center gap-1 text-green-500 text-sm">
            <ArrowUp className="h-4"/>
            <span>86.7%</span>
            <span >(1y)</span>
          </div>
        </div>
          <div className="text-xs text-muted-foreground">1.00000 BTC = 0.0%</div>

        {/* Progress bar */}
        <div>
          <Progress value={50} className="h-2 bg-muted" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>$117,715</span>
            <span>24h Range</span>
            <span>$120,689</span>
          </div>
        </div>



        {/* Stats Section */}
        <div className="space-y-2 mt-2 text-sm flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Market Cap</span>
            <span>$2,375,433,228,739</span>
          </div>
          <Separator/>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Fully Diluted Valuation</span>
            <span>$2,375,433,228,739</span>
          </div>

          <Separator/>
          <div className="flex justify-between">
            <span className="text-muted-foreground">24 Hour Trading Vol</span>
            <span>$54,116,470,726</span>
          </div>
          <Separator/>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Circulating Supply</span>
            <span>19,893,887</span>
          </div>
          <Separator/>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total Supply</span>
            <span>19,893,887</span>
          </div>
          <Separator/>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Max Supply</span>
            <span>21,000,000</span>
          </div>
          <Separator/>
        </div>
<CoinLinks data={data?.links}/>
      </CardContent>
    </Card>

    
     </div>
  )
}

export default CoinDetails
