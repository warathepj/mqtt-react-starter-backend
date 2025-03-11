# เลี้ยงกาแฟผู้พัฒนา

!["Alt text"](https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png)

# MQTT Publisher/Subscriber Example

A simple Node.js application demonstrating MQTT messaging using the MQTT.js library with a publisher and subscriber.

## Features

- Publisher that sends messages to a specific MQTT topic
- Subscriber that listens for messages on the specified topic
- Uses the public MQTT broker at test.mosquitto.org
- Simple error handling and connection status logging

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone this repository
2. Install dependencies:

```bash
npm install mqtt
```

## Usage

The application consists of two scripts that should be run in separate terminal windows:

### Running the Subscriber

```bash
node subscriber.js
```

The subscriber will:

- Connect to the MQTT broker
- Subscribe to the topic "my/test/topic"
- Log all received messages

### Running the Publisher

```bash
node publisher.js
```

The publisher will:

- Connect to the MQTT broker
- Publish a message "Hello from Project 1!" to the topic "my/test/topic"
- Disconnect after sending the message

## Expected Output

Subscriber terminal:

```
Subscriber connected
Subscribed to my/test/topicReceived message on my/test/topic: Hello from Project 1!
```

Publisher terminal:

```
Publisher connectedMessage sent
```

## Files

- `subscriber.js`
- MQTT subscriber implementation
- `publisher.js`
- MQTT publisher implementation

## License

MIT

TODO:
