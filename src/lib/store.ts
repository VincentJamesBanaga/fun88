import { configureStore } from "@reduxjs/toolkit";

// Slices
import { globalSlice } from "./slices/globalSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      globalSlice: globalSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
