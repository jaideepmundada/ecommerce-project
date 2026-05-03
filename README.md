# PayCompare (E-commerce Project)

A sleek, responsive Payment Comparison Tool built with Node.js, Express, and Chart.js.

## Features
- **Payment Options Breakdown**: Compare different payment methods based on fees, speed, and availability.
- **Interactive Data Visualization**: Data is rendered beautifully using Chart.js.
- **PWA Support**: Built to be a Progressive Web App (PWA) with offline caching using Service Workers.
- **Dark Mode UI**: Clean, glassmorphism-inspired dark mode interface.
- **Shareable**: Easily share the tool with others via WhatsApp integration.

## Technologies Used
- HTML5 / CSS3 (Modern Vanilla CSS)
- JavaScript (Vanilla JS on frontend)
- Chart.js (for data visualization)
- Node.js & Express.js (Backend API & Static Server)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
1. Clone the repository to your local machine.
2. Open the project folder in your terminal.
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Running the App
Start the local Express server:
```bash
node server.js
```
or 
```bash
npm start
```

Once running, the terminal will display the local addresses you can use to view the app on your PC or your mobile device (e.g., `http://localhost:5000`).

## Project Structure
- `server.js` - The main Express application that serves the static files and the `/api/payments` endpoint.
- `public/` - Contains all the frontend assets:
  - `index.html` - The main UI structure.
  - `style.css` - The styles and design system.
  - `script.js` - The frontend logic and Chart.js configuration.
  - `sw.js` & `manifest.json` - PWA configuration files.
