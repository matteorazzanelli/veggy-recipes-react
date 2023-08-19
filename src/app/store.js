import { configureStore } from "@reduxjs/toolkit";

import randomRecipesReducer from '../features/randomRecipesSlice';
import searchedRecipesReducer from '../features/searchedRecipesSlice';

export const store = configureStore({
    reducer: {
      randomRecipes: randomRecipesReducer,
      searchedRecipes: searchedRecipesReducer
    }
})