"use client";

import React from "react";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hook";

// Components
import { ImageWrapper, Empty, Button } from "@/components";
import { Favorite, FavoriteOutlined } from "@/components/icons";
import { setFavorites } from "@/lib/slices/globalSlice";

const GameFavorite = () => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.globalSlice);

  return (
    <div className="p-2">
      {favorites.length ? (
        <div className="grid grid-cols-3 gap-2">
          {favorites.map((item) => {
            const { name, imagePath } = item;
            const isFavorite = [...favorites].some(
              (item) => item.name === name
            );
            return (
              <div
                key={Math.random()}
                className="relative h-full w-full bg-gray-100"
              >
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
              </div>
            );
          })}
        </div>
      ) : (
        <Empty icon={<Favorite className="text-secondary" />} />
      )}
    </div>
  );
};

export default GameFavorite;
