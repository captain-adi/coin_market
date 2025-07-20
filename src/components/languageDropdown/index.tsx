import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { context } from "@/context/Contex";
import { useContext } from "react";

function LanguageDropDown() {
  const contextValue = useContext(context);
  if (!contextValue) {
    return null;
  }
  const { currency, setCurrency } = contextValue;
  const handleCurrencySelect = (e : string ) => {
    
    switch (e) {
      case "usd":
        {
          setCurrency({ name: "usd", symbol: "$" });
        }

        break;
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case  'eur' : {
        setCurrency({ name: "eur", symbol: "€" });
      }
      break;

      default:
        {
          setCurrency({ name: "usd", symbol: "$" });
        }
        break;
    }
  };
  console.log(currency);
  return (
    <Select onValueChange={handleCurrencySelect}>
      <SelectTrigger>
        <SelectValue placeholder="Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="usd">USD</SelectItem>
        <SelectItem value="inr">INR</SelectItem>
        <SelectItem value="eur">EUR</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageDropDown;
