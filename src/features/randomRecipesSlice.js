import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Request from '../components/ClientApi';

const initialState = {
  recipes: [],
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

export const fetchRandomRecipes = createAsyncThunk(
  'posts/fetchRandomRecipes', async () => {
    const response = await Request.getRandomRecipes(1);
    return response
  }
)

const randomRecipesSlice = createSlice({
  name: 'randomRecipes',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchRandomRecipes.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRandomRecipes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(fetchRandomRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.recipes = state.recipes.concat(action.payload)
      })
  }
})

export const selectAllRandomRecipes = (state) => state.randomRecipes.recipes;
export const getRandomRecipesStatus = (state) => state.randomRecipes.status;
export const getRandomRecipesError = (state) => state.randomRecipes.error;

export default randomRecipesSlice.reducer