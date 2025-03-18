# IoT Visualization Project

A comprehensive IoT visualization system consisting of three main components: frontend interface, backend MQTT service, and device simulator.

## Project Structure

```
├── frontend/     # React-based web interface
├── backend/      # MQTT publisher/subscriber service
└── simulator/    # IoT device simulator
```

## Repositories

- Frontend: [https://github.com/warathepj/mqtt-react-starter-frontend.git](https://github.com/warathepj/mqtt-react-starter-frontend.git)
- Backend: [https://github.com/warathepj/mqtt-react-starter-backend.git](https://github.com/warathepj/mqtt-react-starter-backend.git)
- Simulator: [https://github.com/warathepj/mqtt-react-starter-simulator.git](https://github.com/warathepj/mqtt-react-starter-simulator.git)

## Components

### Frontend

- Built with Vite, TypeScript, React, shadcn-ui, and Tailwind CSS
- Modern, responsive UI with elegant animations
- Real-time data visualization
- Toast notifications system for user feedback
- MQTT message display component
- Routing system with React Router
- Query management with React Query

- Tooltip provider for enhanced UI interactions

### Backend

- MQTT publisher/subscriber implementation
- Uses public MQTT broker (test.mosquitto.org)
- Handles message routing and data processing
- Simple error handling and connection status logging
- REST API endpoints for MQTT message publishing

### Simulator

- Device simulation for testing
- Built with the same tech stack as frontend
- Generates mock IoT data
- Message publishing capabilities
- Real-time UI updates

## Features

- Real-time communication between components via MQTT
- Elegant and responsive design across all components
- Interactive UI elements with animations
- Toast notifications for system feedback
- Comprehensive error handling
- Cross-component message broadcasting

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git

### Installation

1. Clone the repositories:

```bash
# Frontend
git clone https://github.com/warathepj/mqtt-react-starter-frontend.git

# Backend
git clone https://github.com/warathepj/mqtt-react-starter-backend.git

# Simulator
git clone https://github.com/warathepj/mqtt-react-starter-simulator.git
```

2. Install dependencies for each component:

```bash
# Frontend
cd mqtt-react-starter-frontend
npm install

# Backend
cd mqtt-react-starter-backend
npm install

# Simulator
cd mqtt-react-starter-simulator
npm install
```

3. Start the services:

```bash
# Frontend
npm run dev

# Backend
node publisher.js
node subscriber.js

# Simulator
npm run dev
```

## Development

## Testing

Each component can be tested independently:

- Frontend: Test message sending via the UI button
- Simulator: Test device simulation and message broadcasting
- Backend: Monitor MQTT message flow and API endpoints

## License

MIT

## Support

![PromptPay QR](https://warathepj.github.io/js-ai-gallery/public/image/promptpay-20.png)
