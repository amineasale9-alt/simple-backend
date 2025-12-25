const express = require("express");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// Example GET API
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hello from Leapcell API" });
});

// Example POST API
app.post("/api/echo", (req, res) => {
  const data = req.body;
  res.json({
    received: data,
  });
});

// Use the port provided by Leapcell (or default to 3000)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
