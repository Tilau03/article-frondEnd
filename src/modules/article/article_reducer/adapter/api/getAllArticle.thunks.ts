import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInterceptor } from "../../../../../utility";

export const getAllArticleThunk = createAsyncThunk(
  "article/getAllArticle",
  async (_, thunkAPI) => {
    const response = await axiosInterceptor.get("/article");
    return response.data;
  }
);
