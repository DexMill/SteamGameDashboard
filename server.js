const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files
app.use(express.static("."));

// Proxy endpoint for Steam app details
app.get("/api/appdetails", async (req, res) => {
  try {
    const { appids, l } = req.query;
    const url = `https://store.steampowered.com/api/appdetails?appids=${appids}&l=${l}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching app details:", error);
    res.status(500).json({ error: "Failed to fetch app details" });
  }
});

// Proxy endpoint for Steam player count
app.get("/api/players", async (req, res) => {
  try {
    const { appid } = req.query;
    const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;
    console.log(`Fetching player count for appid: ${appid}`);
    const response = await fetch(url);
    const data = await response.json();
    console.log(
      `Player count response for ${appid}:`,
      JSON.stringify(data, null, 2)
    );
    res.json(data);
  } catch (error) {
    console.error("Error fetching player count:", error);
    res.status(500).json({ error: "Failed to fetch player count" });
  }
});

// Proxy endpoint for Steam news
app.get("/api/news", async (req, res) => {
  try {
    const { appid, count } = req.query;
    const url = `https://api.steampowered.com/ISteamNews/GetNewsForApp/v2?appid=${appid}&count=${count}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

// Proxy endpoint for Steam store search
app.get("/api/storesearch", async (req, res) => {
  try {
    const { term, l, cc } = req.query;
    const url = `https://store.steampowered.com/api/storesearch?term=${encodeURIComponent(
      term
    )}&l=${l}&cc=${cc}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error searching store:", error);
    res.status(500).json({ error: "Failed to search store" });
  }
});

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log("Open your browser and navigate to http://localhost:3000");
});
