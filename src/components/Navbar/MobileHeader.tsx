import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function MobileHeader() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-saffron" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <span>
                Welcome! to{" "}
                <span className="text-saffron underline decoration-wavy decoration-bgreen">
                  BengalBiteExpress
                </span>
              </span>
            </SheetTitle>
            <Separator />
            <SheetDescription>
              Savor the Flavors of Bengal, Delivered to Your Doorstep!
              <div className=" mt-2">
                <Button
                  className="w-full bg-bgreen"
                  onClick={async () => loginWithRedirect}
                >
                  Login
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileHeader;
