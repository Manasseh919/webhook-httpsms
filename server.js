const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can change the port as needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle incoming webhook events
app.post('/webhook', (req, res) => {
    // Process the incoming event data
    console.log('Received webhook event:', req.body);
    
    // Send a response to acknowledge receipt of the event
    res.status(200).send('Event received successfully.');
});

// Create HTTP server
const server = http.createServer(app);

// Start server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});