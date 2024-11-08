import React, { type ReactNode } from "react";

type EmptyProps = {
  icon?: ReactNode;
};

const Empty: React.FC<EmptyProps> = ({ icon }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gray-100 p-10">
      {icon}
      <span className="text-secondary text-sm">No data</span>
    </div>
  );
};

export default Empty;
