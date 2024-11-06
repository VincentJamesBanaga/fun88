import { useMemo } from "react";

// Data
import { GAME_LIST } from "@/api/data";

const useFilteredGames = (
  filterName: string = "",
  filterCategory: string = "",
  filterProvider: string[] = []
) => {
  const filteredGames = useMemo(() => {
    const filterGames = () => {
      return GAME_LIST.filter(({ name, category, provider }) => {
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
  }, [filterName, filterCategory, filterProvider]);

  return filteredGames;
};

export default useFilteredGames;
