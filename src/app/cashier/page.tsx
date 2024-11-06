import React from "react";

// Components
import { Empty } from "@/components";
import { Cashier as CashierIcon } from "@/components/icons";

const Cashier = () => {
  return <Empty icon={<CashierIcon className="text-secondary" />} />;
};

export default Cashier;
