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

function MobileHeader() {
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
                <Button className="w-full bg-bgreen">Login</Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileHeader;
