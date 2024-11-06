import React, { type ReactNode } from "react";

// Components
import { Close, SearchMenu } from "@/components/icons";
import { Button } from "@/components";

type DrawerProps = {
  title: string;
  isOpen: boolean;
  children?: ReactNode;
};

const Drawer: React.FC<DrawerProps> = ({ title, isOpen, children }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      // onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white transition-transform transform ${
          isOpen ? "translate-y-0" : "translate-y-full"
        } h-[80vh]`}
      >
        <div className="flex flex-row justify-between items-center h-12 bg-primary text-white px-2">
          <span className="flex flex-row gap-2">
            <SearchMenu /> {title}
          </span>
          <Button icon={<Close className="h-4 w-4" />} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Drawer;
