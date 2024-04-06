import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function DropDownMenu() {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" flex text-white items-center px-3 font-bold hover:text-saffron gap-2">
        <CircleUserRound />
        <span className="hidden md:flex">{user?.email}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuItem className="flex md:hidden">
          <span>{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            to="/manage-restaurant"
            className="font-bold hover:text-saffron"
          >
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-saffron">
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold bg-bgreen hover:bg-saffron w-full"
            onClick={() => logout()}
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
