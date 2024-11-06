import React from "react";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hook";

// Hooks
import useGameData from "@/hooks/api/useGameData";
import useFilteredGames from "@/hooks/useFilteredGames";

// Components
import { ImageWrapper, Empty, Button } from "@/components";
import { Favorite, FavoriteOutlined } from "@/components/icons";
import { setFavorites } from "@/lib/slices/globalSlice";

const GameList = () => {
  const dispatch = useAppDispatch();
  const { favorites, searchValue, selectedCategory, selectedProvider } =
    useAppSelector((state) => state.globalSlice);

  const { data, loading } = useGameData();

  const filteredGames = useFilteredGames(
    data,
    searchValue,
    selectedCategory,
    selectedProvider
  );

  if (!filteredGames.length && !loading) return <Empty />;

  return (
    <div className="p-2">
      <div className="grid grid-cols-3 gap-2">
        {(loading ? Array(6).fill({}) : filteredGames).map((item) => {
          const { name, imagePath } = item;
          const isFavorite = [...favorites].some((item) => item.name === name);
          return (
            <div
              key={Math.random()}
              className={`relative h-full w-full bg-gray-300 aspect-square rounded-lg ${
                loading ? "animate-pulse" : ""
              }`}
            >
              {!loading && (
                <>
                  <ImageWrapper
                    src={imagePath}
                    alt={imagePath}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full rounded-lg"
                  />
                  <Button
                    icon={
                      isFavorite ? (
                        <Favorite className="text-yellow-500 h-4 w-4" />
                      ) : (
                        <FavoriteOutlined className="h-4 w-4" />
                      )
                    }
                    className="absolute top-0 right-0 rounded-se-lg pb-[19px] pl-[18px] pt-0.5 pr-0.5 bg-[url('/assets/favorite-mask.svg')] bg-cover bg-no-repeat"
                    onClick={() => {
                      dispatch(setFavorites({ isFavorite, item }));
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameList;
