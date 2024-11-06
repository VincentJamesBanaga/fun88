// Schema
import { GameItem } from "@/schema/game";
import { ProviderItem } from "@/schema/provider";

// Data
import { GAME_LIST, PROVIDER_LIST } from "@/api/data";

export const getGameList = (): Promise<GameItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...GAME_LIST]);
    }, 3000);
  });
};

export const getGameProviderList = (): Promise<ProviderItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...PROVIDER_LIST]);
    }, 3000);
  });
};
