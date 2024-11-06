import { createSlice } from "@reduxjs/toolkit";

// Schema
import { GameItem } from "@/schema/game";

type DataType = {
  showGameProvider: boolean;
  searchValue: string;
  selectedCategory: string;
  selectedProvider: string[];
  favorites: GameItem[];
};

const initialState: DataType = {
  showGameProvider: false,
  searchValue: "",
  selectedCategory: "start",
  selectedProvider: [],
  favorites: [],
};

export const globalSlice = createSlice({
  initialState,
  name: "globalSlice",
  reducers: {
    setShowGameProvider(state, action) {
      state.showGameProvider = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSelectedProvider(state, action) {
      state.selectedProvider = action.payload;
    },
    setFavorites(state, action) {
      const { isFavorite, item } = action.payload;
      if (isFavorite) {
        state.favorites = state.favorites.filter((o) => o.name !== item.name);
      } else {
        state.favorites = state.favorites.concat(item);
      }
    },
  },
});

export const {
  setShowGameProvider,
  setSearchValue,
  setSelectedCategory,
  setSelectedProvider,
  setFavorites,
} = globalSlice.actions;
