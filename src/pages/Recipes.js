import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import SearchRecipes from '../components/search-recipes/SearchRecipes'

import { Helmet } from 'react-helmet-async'

export default function Recipes() {
  return (
    <>
      <Helmet>
        <title>Find veggy recipes</title>
        <meta name='description' content='Find your favorite veggy recipe.' />
      </Helmet>
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
