"use client";

import React, { useState, useCallback, type ChangeEvent } from "react";

// Loadash
import { debounce } from "lodash";

// Data
import { CATEGORY_LIST } from "@/api/data";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  setSearchValue,
  setSelectedCategory,
  setShowGameProvider,
} from "@/lib/slices/globalSlice";

// Components
import { SearchBar, Button } from "@/components";
import { Search, SearchMenu } from "@/components/icons";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const { selectedCategory } = useAppSelector((state) => state.globalSlice);

  const handleSearch = useCallback(
    debounce((searchTerm: string) => {
      dispatch(setSearchValue(searchTerm));
    }, 500),
    []
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    handleSearch(searchValue);
  };

  return (
    <div className="sticky top-12 bg-white z-10">
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
          {CATEGORY_LIST.map(({ title, id, Icon }) => {
            const isActive = id === selectedCategory;
            return (
              <Button
                key={id}
                title={title}
                icon={<Icon className="h-5 w-5" />}
                className={`${
                  isActive ? "text-primary border-b-2 border-primary" : ""
                }`}
                onClick={() => {
                  dispatch(setSelectedCategory(id));
                }}
              />
            );
          })}
        </div>
      </nav>
      {isShowSearch && (
        <div className="flex flex-row gap-3 p-2 text-secondary w-full">
          <SearchBar
            placeholder="Search games..."
            className="flex-1"
            onChange={handleChange}
          />
          <Button
            icon={<SearchMenu className="h-5 w-5" />}
            className="border border-secondary rounded-md"
            onClick={() => {
              dispatch(setShowGameProvider(true));
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
