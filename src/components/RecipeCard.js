import React from 'react'

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function RecipeCard({ title, id, image }) {
  return (
    <article className="recipe-card">
      <div className="img-container">
        <img src={image || "../images/defaultImg.jpg"} alt="" />

        <Link to={`/recipes/${id}`} className="btn-primary recipe-link">
          More
        </Link>
      </div>
      <p className="recipe-title">{title}</p>
    </article>
  )
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};