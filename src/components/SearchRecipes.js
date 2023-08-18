import React from 'react'

import Filters from './Filters'
import Title from './Title'
import Filteredrecipes from './Filteredrecipes'

export default function FilteredRecipes() {
  return (
    <section className="search-recipes">
      <Title title="Search Recipes" />
      <Filters/>
      <Filteredrecipes />
    </section>
  )
}
