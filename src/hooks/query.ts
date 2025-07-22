import cryptoAPI from "@/api/apiendpoints";
import { useQuery } from "@tanstack/react-query";
export const usegetCoinList = () => {
    return useQuery({
        queryKey : ['coinList'],
        queryFn: async ()=> cryptoAPI.getCryptoCoinsList(),
        staleTime: 5 * 60 * 1000, // cache for 5 minutes
        refetchOnMount: false,
    });
}   


export const usegetCoinDetails = (coinname : string | undefined)=>{
    return useQuery({
        queryKey : ['coindetails',coinname  ],
        queryFn : async() =>{
                return cryptoAPI.getCtyptoCoinDetails(coinname)
        },
        enabled: !!coinname, // ✅ prevents fetching when coinname is undefined
    staleTime: 5 * 60 * 1000, // ✅ data stays fresh for 5 mins
    refetchOnMount: false,    // ✅ don’t refetch if already cached
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


export const usegetCoinSearch = (query: string) => {
    return useQuery({
        queryKey: ['coinSearch', query],
        queryFn: async () => {
            return cryptoAPI.getCoinSearch(query);
        },
        enabled: !!query, // Only run the query if query is not empty
    });
}