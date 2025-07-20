export interface ITrendingCoinsResponse {
  coins: ITrendingCoinItem[];
  nfts: ITrendingNftItem[];
  categories: ITrendingCategory[];
}

export interface ITrendingCoinItem {
  item: {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
}

export interface ITrendingNftItem {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  nft_contract_id: number;
  native_currency_symbol: string;
  floor_price_in_native_currency: number;
  floor_price_24h_percentage_change: number;
  data: {
    floor_price: {
      native_currency: string;
      usd: number;
    };
    h24_percentage_change: {
      native_currency: string;
      usd: number;
    };
  };
}

export interface ITrendingCategory {
  id: number;
  name: string;
  market_cap_1h_change: number;
  slug: string;
}
