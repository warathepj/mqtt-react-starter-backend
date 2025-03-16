const mqtt = require('mqtt');
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Keep the MQTT client connection
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  console.log('Publisher connected to MQTT broker');
});

// Handle publish requests
app.post('/publish', (req, res) => {
  const { message } = req.body;
  
  // Use the existing MQTT client to publish
  client.publish('my/test/topic', message, (err) => {
    if (err) {
      console.error('Publish error:', err);
      res.status(500).json({ error: 'Failed to publish message' });
    } else {
      console.log('Message sent:', message);
      res.json({ success: true });
    }
  });
});

// Error handling for MQTT client
client.on('error', (err) => {
  console.error('MQTT error:', err);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
