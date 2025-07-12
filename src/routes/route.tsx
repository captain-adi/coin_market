import App from "@/App";
import Dashboard from "@/pages/dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";

export const route = createBrowserRouter([

     {
        path: "/",
        element : <App />,
        children: [
            {
                path: "/",
                element : <Dashboard/>
            }
        ]
     }
]

)