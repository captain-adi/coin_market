import cryptoAPI from "@/api/apiendpoints";
import { useQuery } from "@tanstack/react-query";
export const usegetCoinList = () => {
    return useQuery({
            queryKey : ['coinList'],
            queryFn: async ()=>{
                return cryptoAPI.getCryptoCoinsList();
            }
    })
}   


export const usegetCoinDetails = (coinname : string | undefined)=>{
    return useQuery({
        queryKey : ['coindetails'],
        queryFn : async() =>{
                return cryptoAPI.getCtyptoCoinDetails(coinname)
        }
    })
}


export const usegetCoinChartData = (coinname: string , day: number | string) => {
    return useQuery({
        queryKey: ['coinChartData', coinname, day],
        queryFn: async () => {
            return cryptoAPI.getCrytoDataForChart(coinname, day);
        },
        enabled: !!coinname, // Only run the query if coinname is defined
    });
};


export const usegetTrendingCoins=()=>{
    return useQuery({
        queryKey : ['trendingCoins'],
        queryFn : async()=>{
            return cryptoAPI.getTrendingCoins();
        }
    })
}