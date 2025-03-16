const mqtt = require('mqtt');
const express = require('express');
const cors = require('cors');

const app = express();
const client = mqtt.connect('mqtt://test.mosquitto.org');

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// WebSocket setup for real-time communication
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8085 });

// Store connected WebSocket clients
const clients = new Set();

// WebSocket connection handling
wss.on('connection', (ws) => {
  clients.add(ws);
  
  ws.on('close', () => {
    clients.delete(ws);
  });
});

// MQTT connection and subscription
client.on('connect', () => {
  console.log('Subscriber connected');
  client.subscribe('my/test/topic', (err) => {
    if (err) {
      console.error('Subscribe error:', err);
    } else {
      console.log('Subscribed to my/test/topic');
    }
  });
});

// Handle incoming MQTT messages
client.on('message', (topic, message) => {
  const messageStr = message.toString();
  console.log(`Received message on ${topic}: ${messageStr}`);
  
  // Broadcast message to all connected WebSocket clients
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        topic,
        message: messageStr,
        timestamp: new Date().toISOString()
      }));
    }
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Subscriber server running on port ${PORT}`);
});
