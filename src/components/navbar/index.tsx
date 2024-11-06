"use client";

import React, { useState } from "react";

// Data
import { NAV_LIST } from "@/api/data";

// Components
import { SearchBar, Button } from "@/components";
import { Search, SearchMenu } from "@/components/icons";

const Navbar = () => {
  const [selected, setSelected] = useState<string>("start");
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);

  return (
    <>
      <nav className="flex flex-row items-center justify-evenly h-auto text-secondary">
        <div className="flex flex-row items-center">
          <Button
            title="SEARCH"
            icon={<Search className="h-5 w-5" />}
            className={`${
              isShowSearch ? "text-primary border-b-2 border-primary" : ""
            }`}
            onClick={() => {
              setIsShowSearch(!isShowSearch);
            }}
          />
        </div>
        <div className="border-l-[1px] border-neutral-300 h-7 mx-2" />
        <div className="hide-scrollbar flex items-center gap-1 overflow-x-auto overflow-y-hidden snap-proximity snap-x">
          {NAV_LIST.map(({ title, id, Icon }) => {
            const isActive = id === selected;
            return (
              <Button
                key={id}
                title={title}
                icon={<Icon className="h-5 w-5" />}
                className={`${
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }`}
                onClick={() => {
                  setSelected(id);
                }}
              />
            );
          })}
        </div>
      </nav>
      {isShowSearch && (
        <div className="flex flex-row gap-3 p-2 text-secondary w-full">
          <SearchBar placeholder="Search games..." className="flex-1" />
          <Button
            icon={<SearchMenu className="h-5 w-5" />}
            className="border border-secondary rounded-md"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
