import type { ICoinList } from "@/types";
import { API_CONFIG } from "./apiconfig";
import type { ICoinDetails } from "@/types/coinDataType";

class Cypto_API {
    private CreateUrl(endpoint : string){
                const baseURL = API_CONFIG.COIN_BASE_URL;
                const searchParams = new URLSearchParams({
                    vs_currency: API_CONFIG.DEFAULT_PARAMS.vs_currency,
                    sparkline : "true",
                })
                return `${baseURL}/${endpoint}?${searchParams.toString()}`;
    }   
     private async fetchData<T>(url: string): Promise<T>{
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                return response.json();
    }

    async getCryptoCoinsList(): Promise<ICoinList> {
          const url = this.CreateUrl(API_CONFIG.ENDPOINTS.CRYPTO_CURRENCIES_LIST);
          return this.fetchData<ICoinList>(url);
    }

    async getCtyptoCoinDetails (coinname:string | undefined):Promise<ICoinDetails> {
        const url = this.CreateUrl(`${coinname}`);
        return this.fetchData<ICoinDetails>(url);
    }
    async getCrytoDataForChart (coinname: string , day : number | string){
           const url = this.CreateUrl(`${coinname}/market_chart?day=${day}`);
           return this.fetchData(url)
    }
}

const cryptoAPI = new Cypto_API();
export default cryptoAPI;