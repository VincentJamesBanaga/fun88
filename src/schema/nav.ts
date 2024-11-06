import { type SVGProps, type ComponentType } from "react";

export type NavItemId =
  | "start"
  | "new"
  | "slots"
  | "live"
  | "jackpots"
  | "tablegames"
  | "bingo"
  | "others";

export interface NavItem {
  title: string;
  id: NavItemId;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
