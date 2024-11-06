import { useMemo } from "react";

// Schema
import { GameItem } from "@/schema/game";

const useFilteredGames = (
  data: GameItem[] = [],
  filterName: string = "",
  filterCategory: string = "",
  filterProvider: string[] = []
) => {
  const filteredGames = useMemo(() => {
    const filterGames = () => {
      return [...data].filter(({ name, category, provider }) => {
        const isNameMatch = filterName
          ? name.toLowerCase().includes(filterName.toLowerCase())
          : true;

        let isCategoryMatch = filterCategory
          ? category.toLowerCase() === filterCategory.toLowerCase()
          : true;

        if (
          filterCategory.toLowerCase() === "start" ||
          filterCategory.toLowerCase() === "others"
        )
          isCategoryMatch = true;

        const isProviderMatch = filterProvider.length
          ? filterProvider.includes(provider)
          : true;

        return isNameMatch && isCategoryMatch && isProviderMatch;
      });
    };

    return filterGames();
  }, [data, filterName, filterCategory, filterProvider]);

  return filteredGames;
};

export default useFilteredGames;
