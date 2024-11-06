import React from "react";

// Components
import { ImageWrapper } from "@/components";
import { User, Wallet } from "@/components/icons";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-row justify-between items-center h-12 shadow-md px-4 bg-white z-10">
      <div className="flex flex-row gap-3 items-center">
        <ImageWrapper
          src="/assets/header/menu.svg"
          alt="menu"
          className="h-4 w-4"
        />
        <ImageWrapper
          src="/assets/header/fun88.svg"
          alt="menu"
          className="h-5 w-auto"
        />
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        <Wallet className="text-secondary" />
        <span className="relative text-primary font-bold top-[2px]">
          $1,990.6
        </span>
        <ImageWrapper
          src="/assets/header/divider.svg"
          alt="divider"
          className="h-8 w-auto"
        />
        <User className="text-primary" />
      </div>
    </header>
  );
};

export default Header;
