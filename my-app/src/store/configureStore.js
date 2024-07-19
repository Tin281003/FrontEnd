import { configureStore } from "@reduxjs/toolkit";
import homeNewsReducer from "../features/homeNewsSlice";
import searchReducer from "../features/searchSlice";
import recentReducer from "../features/recentSlice";
import newsReducer from "../features/newsSlice";

import thunk from "redux-thunk";
const store = configureStore({
  reducer: {
    homeNews: homeNewsReducer,
    search: searchReducer,
    recent: recentReducer,
    news: newsReducer,
  },
  middleware: [thunk],
});

export default store;
