"use client";

import React, { useState } from "react";

// Data
import { FOOTER_LIST } from "@/api/data";

// Components
import Link from "next/link";
import { Button } from "@/components";

const Footer = () => {
  const [selected, setSelected] = useState<string>("sports");

  return (
    <footer className="sticky flex flex-row justify-evenly items-center bottom-0 w-full h-14 bg-white">
      {FOOTER_LIST.map(({ title, id, Icon }) => {
        const isActive = id === selected;
        return (
          <Link href={`${id === "sports" ? "/" : `/${id}`}`} key={id}>
            <Button
              title={title}
              icon={<Icon />}
              className={`${isActive ? "text-primary" : "text-secondary"} px-1`}
              onClick={() => {
                setSelected(id);
              }}
            />
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
