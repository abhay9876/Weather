import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{ padding: '10px', fontSize: '16px', width: '250px' }}
      />
      <button
        type="submit"
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px' }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
