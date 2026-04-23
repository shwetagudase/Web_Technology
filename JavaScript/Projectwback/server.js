// 1. Import Express and required modules 
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

// 3. Setup Middleware 
app.use(cors()); 
app.use(express.json()); 

// 4. Define your API Key directly 
const API_KEY = "01b21ebc564e822de1f802baf7dcbbcf";

app.get('/weather/city', async (req, res) => {
    try {
        const city = req.query.city; 
        
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        res.json(response.data); 
    } catch (error) {
        res.status(500).json({ error: "API Request Failed" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});