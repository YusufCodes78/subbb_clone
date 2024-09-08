import { React, useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className="p-1 flex items-center justify-center">
          <Image src={"subbb_logo.svg"} width={90} height={10} alt="logo" />
        </div>
        <div className="flex items-center justify-center">
          <MenuItem setActive={setActive} active={active} item="Features">
            <div className="flex flex-col space-y-4 text-sm bg-transparent"></div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
          ></MenuItem>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#1261ff] rounded-full px-4 py-2 mr-2 font-bold">
            Get started for free
          </button>
          <button className="border border-[#29292c] hover:bg-[#29292c] rounded-full px-4 py-2 font-bold">
            Sign in
          </button>
        </div>
      </Menu>
    </div>
  );
}
