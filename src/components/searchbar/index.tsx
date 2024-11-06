import React, { type InputHTMLAttributes } from "react";

// Components
import { Search } from "@/components/icons";

const SearchBar: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...otherProps
}) => {
  return (
    <div className="flex flex-row items-center justify-center border border-primary h-10 w-full rounded-md p-2 gap-3">
      <Search className="h-5 w-5" />
      <input
        type="search"
        style={{
          outline: "unset",
        }}
        {...otherProps}
      />
    </div>
  );
};

export default SearchBar;
