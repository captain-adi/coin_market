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

