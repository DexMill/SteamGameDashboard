# Game Dashboard

A cyberpunk-themed game dashboard that displays Steam game information including prices, player counts, and latest news. Built as a static web application that works directly in the browser.

## Features

- **Real-time Game Data**: Fetches current prices, player counts, and news from Steam APIs
- **Dynamic Tabs**: Add and remove games to track multiple titles simultaneously
- **Cyberpunk UI**: Modern neon-themed interface with smooth animations
- **Responsive Design**: Works on desktop and mobile devices
- **Local Storage**: Saves your game selections between sessions

## How to Use

1. **Add Games**: Enter a game name or Steam ID in the input field and click "Add Game"
2. **Switch Between Games**: Click on different tabs to view data for different games
3. **Remove Games**: Click the × button on any tab to remove it (you can't remove the last tab)
4. **Refresh Data**: Click the refresh button to get the latest information

## Default Games

The dashboard comes pre-loaded with:

- Rumble (ID: 890550)
- Expedition 33 (ID: 1903340)
- Bloodthief Demo (ID: 2941730)

## Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **APIs**: Direct calls to Steam Web APIs using CORS proxy
- **Storage**: Browser localStorage for game preferences
- **Deployment**: Static site compatible with GitHub Pages, Netlify, etc.

## Local Development

To run locally, simply open `index.html` in your browser. No server required!

For development with live reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

## API Endpoints Used

- Steam Store Search: `https://store.steampowered.com/api/storesearch`
- Game Details: `https://store.steampowered.com/api/appdetails`
- Player Count: `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1`
- Game News: `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2`

## Browser Compatibility

Works in all modern browsers that support:

- ES6+ JavaScript features
- Fetch API
- CSS Grid and Flexbox
- CSS Custom Properties (variables)

## License

MIT License - feel free to use and modify as needed!
