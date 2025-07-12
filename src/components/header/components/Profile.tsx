import LoginDialog from "@/components/LoginDialog";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

function Profile() {
  return ( 
    <Popover >
      <PopoverTrigger>
        {" "}
        <span className=" text-sm font-medium">
          ⭐ Portfolio
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="flex flex-col gap-4 p-4">
          <div className="">
            <Button variant="outline" >
              <span className="text-sm font-medium">
                ⭐ My Portfolio
              </span>
            </Button>
          </div>
          <Separator />
          <div className="flex flex-col gap-6 items-center ">
            <p className="text-muted-foreground text-sm w-6/5 text-center">
              Create an account to get personalized insights for your portfolio
              - it's free!
            </p>

           <LoginDialog/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default Profile;
