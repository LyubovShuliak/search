import { configureStore } from "@reduxjs/toolkit";
import resumesSlice from "../redux/work_search/shopSlice";
const store = configureStore({
  reducer: {
    products: resumesSlice,
    
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
