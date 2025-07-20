import { createContext, useState, type ReactNode } from "react"

interface ICurrency{
    name  : string,
    symbol: string
}
interface IContextData{
      currency  : ICurrency
     setCurrency: React.Dispatch<React.SetStateAction<ICurrency>>;
}

export const context = createContext<IContextData | null>(null)

export const ContextProvider = ({children} :{ children : ReactNode})=>{
    const [currency,setCurrency] = useState<ICurrency>({
        name  : 'usd',
        symbol : '$',
    })


   const value : IContextData = {
      currency,
      setCurrency
    }
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}