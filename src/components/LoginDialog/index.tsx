import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoginDialog({open}:{open: boolean}) {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Dialog open={open} >
        <DialogTrigger>
            <Button variant="outline" className="text-sm font-medium text-yellow-400 " onClick={()=> setOpenDialog(true)}>
                ⭐ Get Started
            </Button>
        </DialogTrigger>
      <DialogContent className="bg-zinc-900 text-white px-6 py-8 max-w-sm rounded-lg border border-zinc-700">
        

        {/* Title & Description */}
        <h2 className="text-3xl font-semibold mb-1">Welcome to CoinGecko</h2>
        <p className="text-sm text-zinc-400 mb-6">
          Unlock Portfolio features to track P&amp;L and coins you care about 📈
        </p>

        {/* Continue with Google */}
        <Button
          variant="outline"
          className="w-full p-6 gap-2 text-muted-foreground"
        >
         <img width="20" height="20" loading="lazy" className="tw-flex-initial" src="https://static.coingecko.com/s/google-167c1e093ccfc014420e14da91325a1f70c91e592f58164fefe84603d2fde02e.svg" />
          Continue with Google
        </Button>

        {/* Continue with Apple */}
        <Button 
          variant="outline"
          className="flex w-full p-6 gap-2 text-muted-foreground  "
        >
          <img width="20" height="20" loading="lazy" className="tw-flex-initial justify-self-start tw-hidden dark:tw-block" src="https://static.coingecko.com/s/apple_white-df0a614505190a8b2bc87fd16396160fed4680f62a69d5005cd2ae95562b2d2a.svg" />
          Continue with Apple
        </Button>

        {/* OR Divider */}
        <div className="flex items-center gap-2 my-4 text-zinc-600 text-sm">
          <hr className="flex-grow border-zinc-700" />
          <span>or</span>
          <hr className="flex-grow border-zinc-700" />
        </div>

        {/* Continue with Email */}
        <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white">
          Continue with email
        </Button>

        {/* Footer Disclaimer */}
        <p className="text-xs text-zinc-500 mt-6 text-center">
          By continuing, you acknowledge that you've read and agree fully to our{" "}
          <a href="#" className="underline text-white hover:text-blue-400">Terms of Service</a> and{" "}
          <a href="#" className="underline text-white hover:text-blue-400">Privacy Policy</a>.
        </p>
      </DialogContent>
    </Dialog>
  );
}
