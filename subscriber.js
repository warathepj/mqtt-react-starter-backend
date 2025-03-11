const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  console.log('Subscriber connected');
  // Subscribe to the topic "my/test/topic"
  client.subscribe('my/test/topic', (err) => {
    if (err) {
      console.error('Subscribe error:', err);
    } else {
      console.log('Subscribed to my/test/topic');
    }
  });
});

// Handle incoming messages
client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});
