import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { 
  selectAllRandomRecipes,
  getRandomRecipesStatus,
  getRandomRecipesError,
  fetchRandomRecipes
 } from '../features/randomRecipesSlice';

import Title from "./Title";
import Loading from "./Loading";
import RecipeCard from "./RecipeCard"

export default function RandomRecipes() {

  const dispatch = useDispatch();
  
  const randomRecipes = useSelector(selectAllRandomRecipes);
  const randomRecipesStatus = useSelector(getRandomRecipesStatus);
  const randomRecipesError = useSelector(getRandomRecipesError);
  
  useEffect(()=>{
    console.log('inside use effect random : ', randomRecipesStatus)
    if(randomRecipesStatus === 'idle'){
      dispatch(fetchRandomRecipes()) // FIXME: called twice
    }
  },[randomRecipesStatus, dispatch])

  let content;
  if (randomRecipesStatus === 'loading') {
    content = <Loading/>;
  } else if (randomRecipesStatus === 'succeeded') {
    console.log(randomRecipes)
    content = randomRecipes.map(
      (item) => {
        return <RecipeCard key={item.id} title={item.title} id={item.id} image={item.image}/>
      }
    )
  } else if (randomRecipesStatus === 'failed') {
    content = <p>{randomRecipesError}</p>;
  }

  return (
    <div>
      <Title title="Today's chef's tips" />
      <section className="recipe-container">
          {content}
      </section>
    </div>
    
  );
}
