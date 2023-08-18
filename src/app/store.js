import { configureStore } from "@reduxjs/toolkit";

import randomRecipesReducer from '../features/randomRecipesSlice';
// import filteredRecipesReducer from '../features/recipesSlice';
// import searchFiltersReducer from '../features/recipesSlice';

export const store = configureStore({
    reducer: {
      randomRecipes: randomRecipesReducer
      // ,
      // filteredRecipes: filteredRecipesReducer,
      // searchFilters: searchFiltersReducer
    }
})