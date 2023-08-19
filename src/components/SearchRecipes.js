import React from 'react'

import Filters from './Filters'
import Title from './Title'
import FilteredRecipes from './FilteredRecipes'

export default function SearchRecipes() {
  return (
    <section className="search-recipes">
      <Title title="Search Recipes" />
      <Filters/>
      <FilteredRecipes />
    </section>
  )
}
