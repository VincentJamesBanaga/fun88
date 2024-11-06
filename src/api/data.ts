// Schema
import { FooterItem } from "@/schema/footer";
import { CarouselItem } from "@/schema/carousel";

// Components
import { Casino, Favorite, Invite, Sports, Cashier } from "@/components/icons";

export const FOOTER_LIST: FooterItem[] = [
  {
    title: "SPORTS",
    id: "sports",
    Icon: Sports,
  },
  {
    title: "FAVORITES",
    id: "favorites",
    Icon: Favorite,
  },
  {
    title: "INVITE",
    id: "invite",
    Icon: Invite,
  },
  {
    title: "CASINO LIVE",
    id: "casino",
    Icon: Casino,
  },
  {
    title: "CASHIER",
    id: "cashier",
    Icon: Cashier,
  },
];

export const CAROUSEL_LIST: CarouselItem[] = [
  {
    title: "RESCUE",
  },
  {
    title: "BONUS",
  },
  {
    title: "WE ARE HERE FOR YOU",
  },
];
