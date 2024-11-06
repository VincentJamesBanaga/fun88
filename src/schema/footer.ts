import { type SVGProps, type ComponentType } from "react";

export type FooterItemId =
  | "sports"
  | "favorites"
  | "invite"
  | "casinolive"
  | "cashier";

export interface FooterItem {
  title: string;
  id: FooterItemId;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}
