import { ArticleInterface, articleActions } from "..";
import { AppDispatch } from "../../../../infrastructure/store/store";
import { axiosInterceptor, normalize } from "../../../../utility";

//
async function getAllArticleAPI() {
  return await axiosInterceptor.get("/article");
}

//
export const showAllArticles = () => (dispatch: AppDispatch) => {
  dispatch(articleActions.startCall());

  return getAllArticleAPI()
    .then((response) => {
      const { data } = response;
      const byId = normalize<ArticleInterface>(data, "_id");
      dispatch(articleActions.showAll(byId));
    })
    .catch((error) => {
      dispatch(articleActions.catchError(error));
    });
};
