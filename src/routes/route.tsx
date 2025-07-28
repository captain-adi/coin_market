import App from "@/App";
import { ContextProvider } from "@/context/Contex";
import Dashboard from "@/pages/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import CoinDetails from "../pages/coin/CoinDetails"
import TrendingCurrencty from "@/pages/trendingCurrency";
import TopGainerAndLoosers from "@/pages/TopGainer&Looser";
export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContextProvider>
        <App />
      </ContextProvider>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path : "/coins/details/:coinname",
        element : <CoinDetails />
      },
      {
        path: '/coins/trending',
        element : <TrendingCurrencty/>
      },
      {
        path : "/coins/topgainers-and-loosers",
        element : <TopGainerAndLoosers />
      }
    ],
  },
]);
