export const API_CONFIG = {
    COIN_BASE_URL: "https://api.coingecko.com/api/v3/coins",
    ENDPOINTS: {
        CRYPTO_CURRENCIES_LIST: "markets",
        CRYPTOCURRENCY_DETAILS: "coins",
        GLOBAL_DATA: "/global",
        SEARCH: "/search",
        EXCHANGES: "/exchanges",
        EXCHANGE_DETAILS: "/exchanges/{id}",
        TRENDING_CRYPTOS: "search/trending",
    },
    DEFAULT_PARAMS: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 100,
        page: 1,
    },
}
