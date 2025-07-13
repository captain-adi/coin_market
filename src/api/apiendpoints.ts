import type { ICoinList } from "@/types";
import { API_CONFIG } from "./apiconfig";

class Cypto_API {
    private CreateUrl(endpoint : string){
                const baseURL = API_CONFIG.COIN_BASE_URL;
                const searchParams = new URLSearchParams({
                    vs_currency: API_CONFIG.DEFAULT_PARAMS.vs_currency,
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
}

const cryptoAPI = new Cypto_API();
export default cryptoAPI;