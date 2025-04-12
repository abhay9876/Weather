import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    try {
      setError('');
      // const res = await axios.get(`http://localhost:5000/weather?city=${city}`);
      const res = await axios.get(`/weather?city=${city}`);

      setWeather(res.data);
    } catch (err) {
      setWeather(null);
      setError('City not found!');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Real-Time Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
