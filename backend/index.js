const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Enable CORS
app.use(cors());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// JSON parsing
app.use(express.json());

// Quiz routes
const quizRoutes = require("./routes/quiz");
app.use("/api/quiz", quizRoutes);

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
