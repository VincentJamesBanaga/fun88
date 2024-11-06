// Schema
import { NavItem } from "@/schema/nav";
import { FooterItem } from "@/schema/footer";
import { CarouselItem } from "@/schema/carousel";
import { GameItem } from "@/schema/game";
import { ProviderItem } from "@/schema/provider";

// Components
import {
  Casino,
  Favorite,
  Invite,
  Sports,
  Cashier,
  Start,
  New,
  Slots,
  Live,
  Jackpot,
  Table,
  Bingo,
  Others,
} from "@/components/icons";

export const NAV_LIST: NavItem[] = [
  {
    title: "START",
    id: "start",
    Icon: Start,
  },
  {
    title: "NEW",
    id: "new",
    Icon: New,
  },
  {
    title: "SLOTS",
    id: "slots",
    Icon: Slots,
  },
  {
    title: "LIVE",
    id: "live",
    Icon: Live,
  },
  {
    title: "JACKPOTS",
    id: "jackpots",
    Icon: Jackpot,
  },
  {
    title: "TABLE GAMES",
    id: "tablegames",
    Icon: Table,
  },
  {
    title: "BINGO",
    id: "bingo",
    Icon: Bingo,
  },
  {
    title: "OTHERS",
    id: "others",
    Icon: Others,
  },
];

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
    id: "casinolive",
    Icon: Casino,
  },
  {
    title: "CASHIER",
    id: "cashier",
    Icon: Cashier,
  },
];

export const GAME_LIST: GameItem[] = [
  {
    imagePath: "/images/games/anaconda-wild-2.png",
    category: "jackpot",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/aztec-bonus-lines.png",
    category: "jackpot",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/beach-life.png",
    category: "",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/big-bad-wolf.png",
    category: "live",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/book-of-egypt.png",
    category: "",
    provider: "expanse",
  },
  {
    imagePath: "/images/games/crocodile-blitz-xtreme-fb.png",
    category: "",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/inca-jackpot.png",
    category: "jackpot",
    provider: "skywindgroup",
  },
  {
    imagePath: "/images/games/maya-jackpot.png",
    category: "jackpot",
    provider: "skywindgroup",
  },
  {
    imagePath: "/images/games/pirates-power.png",
    category: "",
    provider: "expanse",
  },
  {
    imagePath: "/images/games/pride-of-persia.png",
    category: "",
    provider: "playtech",
  },
  {
    imagePath: "/images/games/shaolin-crew.png",
    category: "",
    provider: "expanse",
  },
  {
    imagePath: "/images/games/sugar-rush.png",
    category: "",
    provider: "pragmaticplay",
  },
];

export const PROVIDER_LIST: ProviderItem[] = [
  {
    imagePath: "/images/game-providers/EM.png",
    provider: "em",
  },
  {
    imagePath: "/images/game-providers/EVO.png",
    provider: "EVO",
  },
  {
    imagePath: "/images/game-providers/EXPANSE.png",
    provider: "EXPANSE",
  },
  {
    imagePath: "/images/game-providers/EZG.png",
    provider: "EZG",
  },
  {
    imagePath: "/images/game-providers/GAMEART.png",
    provider: "GAMEART",
  },
  {
    imagePath: "/images/game-providers/HAB.png",
    provider: "HAB",
  },
  {
    imagePath: "/images/game-providers/HACKSAW.png",
    provider: "HACKSAW",
  },
  {
    imagePath: "/images/game-providers/INBET.png",
    provider: "INBET",
  },
  {
    imagePath: "/images/game-providers/MPLAY.png",
    provider: "MPLAY",
  },
  {
    imagePath: "/images/game-providers/NETENT.png",
    provider: "NETENT",
  },
  {
    imagePath: "/images/game-providers/PGSOFT.png",
    provider: "PGSOFT",
  },
  {
    imagePath: "/images/game-providers/PNG.png",
    provider: "PNG",
  },
  {
    imagePath: "/images/game-providers/PNG.png",
    provider: "PNG",
  },
  {
    imagePath: "/images/game-providers/PP.png",
    provider: "PP",
  },
  {
    imagePath: "/images/game-providers/PRAGMATICPLAY.png",
    provider: "PRAGMATICPLAY",
  },
  {
    imagePath: "/images/game-providers/PT.png",
    provider: "PT",
  },
  {
    imagePath: "/images/game-providers/REDTIGER.png",
    provider: "REDTIGER",
  },
  {
    imagePath: "/images/game-providers/RELAX.png",
    provider: "RELAX",
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
