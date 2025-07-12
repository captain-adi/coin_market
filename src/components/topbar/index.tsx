import { Button } from "@/components/ui/button";
import Setting from "./Setting";

export default function Topbar() {
  return (
    <div className="flex container mx-auto justify-between items-center w-full px-6 py-2  text-sm text-white">
      {/* Left Section */}
      <div className="flex gap-4 flex-wrap">
        <span>
          <span className="text-muted-foreground">Coins:</span>{" "}
          <span className="text-white font-medium">17,660</span>
        </span>
        <span>
          <span className="text-muted-foreground">Exchanges:</span>{" "}
          <span className="text-white font-medium">1,311</span>
        </span>
        <span>
          <span className="text-muted-foreground">Market Cap:</span>{" "}
          <span className=" font-medium">$3.748T  <span className="text-red-500">▼ 3.2%</span></span>
        </span>
        <span>
          <span className="text-muted-foreground">24h Vol:</span>{" "}
          <span className="text-white font-medium">$201.121B</span>
        </span>
        <span>
          <span className="text-muted-foreground">Dominance:</span>{" "}
          <span className="text-white font-medium">BTC 62.5% ETH 9.55%</span>
        </span>
        <span>
          <span className="text-muted-foreground">Gas:</span>{" "}
          <span className="text-white font-medium">0.594 GWEI</span>
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Setting/>
        <Button variant="outline" className="">
          Login
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white">
          Sign up
        </Button>
      </div>
    </div>
  );
}
