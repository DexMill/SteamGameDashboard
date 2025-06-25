# Game Dashboard

A web application that displays real-time information about Steam games including current prices, player counts, and latest news.

## Features

- View current prices for Steam games
- Check real-time player counts
- Browse latest news and updates
- Add new games by name or Steam ID
- Tabbed interface for multiple games

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How it Works

The application uses a Node.js proxy server to bypass CORS restrictions when making API calls to Steam's servers. The proxy server handles:

- Steam Store API calls for game details and pricing
- Steam User Stats API for player counts
- Steam News API for game updates and news
- Steam Store Search API for finding games by name

## API Endpoints

The proxy server provides the following endpoints:

- `/api/appdetails` - Get game details and pricing
- `/api/players` - Get current player count
- `/api/news` - Get latest news for a game
- `/api/storesearch` - Search for games by name

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed: `npm install`
2. Check that the server is running on port 3000
3. Ensure you're accessing the application through `http://localhost:3000` and not by opening the HTML file directly
4. Check the browser console for any error messages

## Default Games

The application comes pre-loaded with three games:

- Rumble (ID: 890550)
- Expedition 33 (ID: 1903340)
- Bloodthief (ID: 2533600)

You can add more games by entering their name or Steam ID in the input field.
