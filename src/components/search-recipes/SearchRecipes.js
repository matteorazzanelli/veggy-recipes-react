import React from 'react'

import Filters from '../filters/Filters'
import Title from '../title/Title'
import FilteredRecipes from '../filtered-recipes/FilteredRecipes'

export default function SearchRecipes() {
  return (
    <section className="search-recipes">
      <Title title="Search Recipes" />
      <Filters/>
      <FilteredRecipes />
    </section>
  )
}
