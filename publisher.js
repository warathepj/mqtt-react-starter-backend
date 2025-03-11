const mqtt = require('mqtt');
const client  = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
  console.log('Publisher connected');
  // Publish a message to the topic "my/test/topic"
  client.publish('my/test/topic', 'Hello from Project 1!', (err) => {
    if (err) {
      console.error('Publish error:', err);
    } else {
      console.log('Message sent');
      client.end(); // disconnect when done
    }
  });
});
