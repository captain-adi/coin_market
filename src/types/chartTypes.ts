export interface IMarketChartData {
  prices: [number, number][];        // [timestamp, price]
  market_caps: [number, number][];   // [timestamp, market cap]
  total_volumes: [number, number][]; // [timestamp, volume]
}
