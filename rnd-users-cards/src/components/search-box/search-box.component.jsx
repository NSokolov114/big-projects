import './search-box.styles.css';
import React from 'react';

export const SearchBox = ({ placeholder, handleChange }) => {
  // destructuring props
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
