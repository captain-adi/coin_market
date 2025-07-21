export interface ISearch {
  coins: ICoin[];
  exchanges: IExchange[];
  icos: any[]; // Empty array, you can change it later if structure known
  categories: ICategory[];
  nfts: INft[];
}

// 1. Coin
export interface ICoin {
  id: string;
  name: string;
  api_symbol: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

// 2. Exchange
export interface IExchange {
  id: string;
  name: string;
  market_type: string;
  thumb: string;
  large: string;
}

// 3. Category
export interface ICategory {
  id: string;
  name: string;
}

// 4. NFT
export interface INft {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
}
