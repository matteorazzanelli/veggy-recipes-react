import React from 'react'

import { useSelector } from 'react-redux'
import {
  selectAllSearchedRecipes,
  getSearchedRecipesStatus,
  getSearchedRecipesError,
} from '../../features/searchedRecipesSlice';

import Title from "../title/Title";
import Loading from "../loading/Loading";
import RecipeCard from "../recipe-card/RecipeCard"

export default function Filteredrecipes() {

  const searchedRecipes = useSelector(selectAllSearchedRecipes);
  const searchedRecipesStatus = useSelector(getSearchedRecipesStatus);
  const searchedRecipesError = useSelector(getSearchedRecipesError);

  let content;
  if (searchedRecipesStatus === 'loading') {
    content = <Loading/>;
  } else if (searchedRecipesStatus === 'succeeded') {
    console.log(searchedRecipes)
    content = searchedRecipes.map(
      (item) => {
        return <RecipeCard key={item.id} title={item.title} id={item.id} image={item.image}/>
      }
    )
  } else if (searchedRecipesStatus === 'failed') {
    content = <p>{searchedRecipesError}</p>;
  }

  return (
    <div>
      <Title title="Results" />
      <section className="recipe-container">
          {content}
      </section>
    </div>
  )
}
