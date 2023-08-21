import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import SearchRecipes from '../components/search-recipes/SearchRecipes'

export default function Recipes() {
  return (
    <>
      <Hero>
        <Banner title="OUR RECIPES" subtitle="Find the recipe that most fits your needs">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <SearchRecipes />
    </>
  )
}
