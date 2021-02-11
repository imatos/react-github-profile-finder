import React, { useContext, useState } from 'react';
import { SearchContext } from '../../../Context/useSearchContext';
import './SearchForm.css';

const SearchForm = () => {
  const [term, setTerm] = useState('');
  const { setSearchParam } = useContext(SearchContext);

  const searchUserHandler = (event) => {
    setTerm(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSearchParam(term);
  };

  const resethandler = () => {
    setTerm('');
    setSearchParam('');
  };

  return (
    <form autoComplete="off" className="search-form" onSubmit={submitHandler}>
      <div className="input-container">
        <input
          name="searchParam"
          className="search-input"
          type="text"
          value={term}
          onChange={searchUserHandler}
          placeholder="Search user..."
        />
        <button className="reset-button" type="button" onClick={resethandler}>
          X
        </button>
      </div>
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
