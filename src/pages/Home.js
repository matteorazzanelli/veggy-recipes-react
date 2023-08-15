import React from 'react'

import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Features from '../components/Features'
import RandomRecipes from '../components/RandomRecipes'

export default function Home() {
  return (
    <>
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