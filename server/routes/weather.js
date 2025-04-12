const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();



router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    console.log("Requesting city:", city);
    console.log("API KEY:", process.env.WEATHER_API_KEY);

    const data = {
      city: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed
    };

    res.json(data);
  } catch (error) {
    console.error("Backend API Error:", error.response ? error.response.data : error.message);
    res.status(404).json({ error: "City not found" });
  }
});




module.exports = router;
