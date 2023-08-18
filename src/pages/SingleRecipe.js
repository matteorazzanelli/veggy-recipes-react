import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from 'react-redux';
import { selectAllRandomRecipes } from '../features/randomRecipesSlice';

import Error from "./Error";

import styled from "styled-components"

export default function SingleRecipe() {

  let params = useParams();

  const randomRecipes = useSelector(selectAllRandomRecipes);

  const [activeRecipe, setActiveRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(()=>{
    const searchRecipe = () => {
      const matchedRecipes = randomRecipes.filter((recipe)=>{
        if(recipe.id === parseInt(params.id))
          return recipe;
      })
      setActiveRecipe(matchedRecipes[0] ?? null)
    }
    searchRecipe()
  },[])

  if(activeRecipe == null){
    return (<Error/>)
  }
  return (    
    <DeatilsWrapper>
      <div>
        <h2>{activeRecipe.title}</h2>
        <img src={activeRecipe.image} alt=""/>
      </div>
      <Info>
        <Button 
          className={activeTab === 'instructions' ? 'active' : ''}
          onClick={()=>setActiveTab('instructions')}
          >
            Instructions
        </Button>
        <Button 
          className={activeTab === 'ingredients' ? 'active' : ''}
          onClick={()=>setActiveTab('ingredients')}
          >
            Ingredients
        </Button>
        {activeTab === 'instructions' && (
          <div>
            <h3 dangerouslySetInnerHTML={{__html: activeRecipe.summary}}></h3>
            <h3 dangerouslySetInnerHTML={{__html: activeRecipe.instructions}}></h3>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {activeRecipe.extendedIngredients.map((ingredient)=>(
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DeatilsWrapper>
  )
}

const DeatilsWrapper = styled.div`
  padding: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h3{
    margin-top: 2rem;
    font-weight: 400;
  }
  li{
    font-size: 1.2rem;
    lien-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
`
