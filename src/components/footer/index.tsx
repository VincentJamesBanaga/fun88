"use client";

import React, { useState } from "react";

// Data
import { FOOTER_LIST } from "@/api/data";

const Footer = () => {
  const [selected, setSelected] = useState<string>("sports");

  return (
    <footer className="sticky flex flex-row justify-evenly items-center bottom-0 h-14 text-">
      {FOOTER_LIST.map(({ title, id, Icon }) => {
        const isActive = id === selected;
        return (
          <button
            key={id}
            className={`flex flex-col items-center ${
              isActive ? "text-primary" : "text-secondary"
            } `}
            onClick={() => {
              setSelected(id);
            }}
          >
            <Icon />
            <span className="text-sm">{title}</span>
          </button>
        );
      })}
    </footer>
  );
};

export default Footer;
