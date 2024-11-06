import React from "react";

// Components
import { Empty } from "@/components";
import { Invite as InviteIcon } from "@/components/icons";

const Invite = () => {
  return <Empty icon={<InviteIcon className="text-secondary" />} />;
};

export default Invite;
