import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Request from '../components/ClientApi';

const initialState = {
  recipes: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  options: {
    query: "",
    intolerance: "",
    protein: 100,
    vegan: false
  }
}

export const fetchSearchedRecipes = createAsyncThunk(
  'posts/fetchSearchedRecipes', async (options) => {
    const response = await Request.getSearchedRecipes(options.query, options.intolerance, options.protein, options.vegan);
    return response
  }
)

const searchedRecipesSlice = createSlice({
  name: 'searchedRecipes',
  initialState,
  reducers:{
    addFilters(state, action){
      state.options = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchedRecipes.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchSearchedRecipes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchSearchedRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.recipes = action.payload
      })
  }
})

export const selectAllSearchedRecipes = (state) => state.searchedRecipes.recipes
export const getSearchedRecipesStatus = (state) => state.searchedRecipes.status;
export const getSearchedRecipesError = (state) => state.searchedRecipes.error;

export const selectAllOptionsRecipes = (state) => state.searchedRecipes.options;

export const { addFilters } = searchedRecipesSlice.actions


export default searchedRecipesSlice.reducer