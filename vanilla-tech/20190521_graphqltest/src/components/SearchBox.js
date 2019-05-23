import React, { useState } from 'react';

function SearchBox({getSearchText}) {
  const [searchText, changeSearchText] = useState('');
  const handleChange = (e) => {
    changeSearchText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchText(searchText);
    changeSearchText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url" />
      <input
        id="url"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default SearchBox;