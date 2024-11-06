import React from "react";

// Data
import { PROVIDER_LIST } from "@/api/data";

// Store
import { useAppDispatch, useAppSelector } from "@/lib/hook";

// Components
import { ImageWrapper } from "@/components";
import { setSelectedProvider } from "@/lib/slices/globalSlice";

const GameProvider = () => {
  const dispatch = useAppDispatch();
  const { selectedProvider } = useAppSelector((state) => state.globalSlice);

  return (
    <ul className="grid grid-cols-2 gap-3 p-3">
      {PROVIDER_LIST.map(({ imagePath, provider }) => {
        const isSelected = selectedProvider.includes(provider);
        return (
          <li
            key={Math.random()}
            className={`flex justify-center items-center h-14 w-full bg-gray-100 rounded-lg cursor-pointer ${
              isSelected ? "border-2 border-primary" : ""
            }`}
            onClick={() => {
              if (isSelected) {
                dispatch(
                  setSelectedProvider(
                    selectedProvider.filter((p) => p !== provider)
                  )
                );
              } else {
                dispatch(
                  setSelectedProvider([
                    ...new Set(selectedProvider.concat(provider)),
                  ])
                );
              }
            }}
          >
            <ImageWrapper
              src={imagePath}
              alt={imagePath}
              width={0}
              height={0}
              sizes="100vw"
              className="w-28 h-auto"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GameProvider;
