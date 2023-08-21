import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllOptionsRecipes,
  addFilters,
  fetchSearchedRecipes,
  getSearchedRecipesStatus
} from '../../features/searchedRecipesSlice';

import './Filters.css'

import { LuSearch } from 'react-icons/lu';

export default function Filters() {

  const dispatch = useDispatch();

  const optionsRecipes = useSelector(selectAllOptionsRecipes);
  const searchedRecipesStatus = useSelector(getSearchedRecipesStatus);
  
  const [query, setQuery] = useState(``)
  const [intolerance, setIntolerance] = useState(``);
  const [protein, setProtein] = useState(100);
  const [vegan, setVegan] = useState(false);

  const [disableForm, setDisbaleForm] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addFilters({query, intolerance, protein, vegan}));
    dispatch(fetchSearchedRecipes({query, intolerance, protein, vegan}));
  }

  useEffect(()=>{
    console.log(optionsRecipes)
    setQuery(optionsRecipes.query)
    setIntolerance(optionsRecipes.intolerance)
    setProtein(optionsRecipes.protein)
    setVegan(optionsRecipes.vegan)

    setDisbaleForm(()=>{
      return searchedRecipesStatus === 'loading'
    })
  },[optionsRecipes, searchedRecipesStatus])

  return (
    <div className="filter-form">
      {/* Free query */}
      <div className='filter-form-text'>
        <LuSearch></LuSearch>
        <input 
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={disableForm}
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
          disabled={disableForm}
        />
        <label htmlFor="vegan">Vegan</label>
      </div>

      {/* Intolerance */}
      <div className="filter-form-intolerance">
        <h5>Intolerances</h5>
        <select value={intolerance} onChange={(e) => setIntolerance(e.target.value)} disabled={disableForm}>
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
        <label htmlFor="maxProtein">
          <h5>Max protein : {protein}</h5>
        </label>
        <input
          type="range"
          name="maxProtein"
          min="0"
          max="100"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
          disabled={disableForm}        
        />
      </div>

      {/* Submit search */}
      <button 
        className='btn-primary'
        onClick={handleSubmitForm}
        disabled={disableForm}
      >
        Go
      </button>

    </div>
  );
}
