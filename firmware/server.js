const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let latestData = {}; // Store the latest sensor data

// Handle incoming sensor data from the external client
app.post('/', (req, res) => {
    console.log("Received POST request:", req.body);
    latestData = req.body; // Store the latest data
    res.send("Data received");
});

// Serve the latest sensor data to React frontend
app.get('/data', (req, res) => {
    res.json(latestData);
});

const PORT = 2000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});