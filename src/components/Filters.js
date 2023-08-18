import React from 'react'

import { useState } from 'react';

import { LuSearch } from 'react-icons/lu';

import Request from './ClientApi';

export default function Filters() {

  const [search, setSearch] = useState("")
  const [intolerance, setIntolerance] = useState("");
  const [protein, setProtein] = useState(100);
  const [vegan, setVegan] = useState(false);

  const [searchedRecipes, setSearchedRecipes] = useState([])

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(
      search,
      intolerance,
      protein,
      vegan
    )
    const results = Request.getSearchedRecipes(search, intolerance, protein, vegan);
    setSearchedRecipes(results)
  }

  return (
    <div className="filter-form">
      {/* Free search */}
      <div className='filter-form-text'>
        <LuSearch></LuSearch>
        <input 
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Vegan checkbox */}
      <div className="filter-form-vegan">
        <input
          type="checkbox"
          name="vegan"
          id="vegan"
          checked={vegan}
          onChange={(e) => setVegan(e.target.checked)}
        />
        <label htmlFor="vegan">Vegan</label>
      </div>

      {/* Intolerance */}
      <div className="filter-form-intolerance">
        <h5>Intolerances</h5>
        <select onChange={(e) => setIntolerance(e.target.value)}>
          <option value="All">--</option>
          <option value="Dairy">Dairy</option>
          <option value="Gluten">Gluten</option>
          <option value="Egg">Egg</option>
          <option value="Soy">Soy</option>
          <option value="Grain">Grain</option>
          <option value="Peanut">Peanut</option>
          <option value="Seafood">Seafood</option>
          <option value="Sesame">Sesame</option>
          <option value="Shellfish">Shellfish</option>
          <option value="Sulfite">Sulfite</option>
          <option value="Wheat">Wheat</option>
        </select>
      </div>

      {/* Protein */}
      <div className="filter-form-protein">
        <label htmlFor="minProtein">
          <h5>Max protein : {protein}</h5>
        </label>
        <input
          type="range"
          name="minProtein"
          min="1"
          max="100"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}        
        />
      </div>

      {/* Submit search */}
      <button 
        className='btn-primary'
        onClick={handleSubmitForm}
      >
        Go
      </button>

    </div>
  );
}
