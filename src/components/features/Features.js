import React from 'react'

import { LuVegan, LuListChecks, LuLightbulb, LuSearch } from 'react-icons/lu'  

import './Features.css'

import Title from '../../components/title/Title'

export default function Features() {

  const features = [
    {
      icon: <LuVegan/>,
      title: "100% vegan",
      info: "All the recipes in this site are meat-free."
    },
    {
      icon: <LuListChecks/>,
      title: "Step By Step",
      info: "We will take you by the hand from the beginning of the preparation until its completion"
    },
    {
      icon: <LuLightbulb/>,
      title: "Chef's advice",
      info: "Every day new ideas for you and your family."
    },
    {
      icon: <LuSearch/>,
      title: "In your words",
      info: "Search the recipe you want by using your own words."
    }
  ] 

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {features.map(item => {
          return (
            <article key={`item-${item.title}`} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  )
}
