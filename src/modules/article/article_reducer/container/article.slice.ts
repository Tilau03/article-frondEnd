import {
  EntityState,
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { ArticleInterface } from "../domain/article.interface";
import { statusActionsTypes, statusAction } from "../../../../utility";
import { getAllArticleThunk } from "../adapter/api/getAllArticle.thunks";
import { RootState } from "../../../../infrastructure/store/store";

//nombre que va a tener el reducer
export const ARTICLE_FEATURE_KEY = "article";

//Interface para manejar la el estado del Articulo
export interface ArticleState extends EntityState<ArticleInterface> {
  loadingStatus: statusActionsTypes;
  error: string;
}

//esto va en otra carpeta
export const articleAdapter = createEntityAdapter<ArticleInterface>({
  //por defecto el adaptador viene con la propiedad id y de
  //la base de datos como es mongodb viene _id lo que hacesmos
  //es modificarlo para que utilice el que tiene _id
  selectId: (entity) => entity._id,
});
//creo el initial state de mi reducer para Article basado en el adaptador
export const initialArticleState: ArticleState = articleAdapter.getInitialState(
  {
    loadingStatus: statusAction.NO_LOADED,
    entities: [],
    error: "",
  }
);

//slice de Articulos
export const articleSlice = createSlice({
  name: ARTICLE_FEATURE_KEY,
  initialState: initialArticleState,
  reducers: {
    showAll: (state: ArticleState, action) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticleThunk.pending, (state: ArticleState) => {
        state.loadingStatus = statusAction.LOADING;
      })
      .addCase(getAllArticleThunk.fulfilled, (state: ArticleState, action) => {
        articleAdapter.setAll(state, action);
        state.loadingStatus = statusAction.LOADED;
      })
      .addCase(getAllArticleThunk.rejected, (state: ArticleState, action) => {
        state.loadingStatus = statusAction.ERROR;
        state.error = action.error.message ?? "";
      });
  },
});

//exportamos el reducer para agregarlo al store
export const articleReducer = articleSlice.reducer;

export const articleActions = articleSlice.actions;

//selectores directo como sifueran un customHook
export const {
  selectAll: selectAllArticle,
  selectEntities: selectUserEntities,
} = articleAdapter.getSelectors((state: RootState) => state.article);

//me esta dando un error de tipado pero no se rompe y no esta mal
//te muestro la documentacion
