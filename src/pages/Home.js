import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Features from '../components/features/Features'
import RandomRecipes from '../components/random-recipes/RandomRecipes'

import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Veggy Recipes for everybody</title>
        <meta name='description' content='Beginner friendly page for searching veggy recipes.' />
      </Helmet>
      <Hero>
        <Banner title="Veggie meal prep" subtitle="Watch our recipes">
          <Link to='/recipes' className="btn-primary">
            GO TO RECIPES
          </Link>
        </Banner>
      </Hero>
      <Features />
      <RandomRecipes />
    </>
  ) 
}