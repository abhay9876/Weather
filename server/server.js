const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());


app.get('/test', (req, res) => {
  res.send('Backend is working!');
});


const weatherRoute = require('./routes/weather');
app.use('/weather', weatherRoute);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
