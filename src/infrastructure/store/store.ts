import { configureStore } from "@reduxjs/toolkit";
import {
  ARTICLE_FEATURE_KEY,
  articleReducer,
} from "../../modules/article/article_reducer";

// ...
const store = configureStore({
  reducer: {
    [ARTICLE_FEATURE_KEY]: articleReducer,
  },
});

//esto lo vasmos a usar para tipar el state de la aplicacion
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
