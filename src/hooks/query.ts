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
