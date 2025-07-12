import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings} from "lucide-react";

function Setting() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"outline"} className="">
          <Settings />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2">
        <DropdownMenuItem>Language</DropdownMenuItem>
        <DropdownMenuItem>Currency</DropdownMenuItem>
        <DropdownMenuItem>Dark Mode</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Setting;
