const express = require("express");
const router = express.Router();

const questions = [
  { q: "Capital of France?", a: "Paris" },
  { q: "2 + 2?", a: "4" },
  { q: "Color of the sky?", a: "Blue" },
  { q: "5 - 3?", a: "2" },
  { q: "Largest planet?", a: "Jupiter" },
  { q: "Water freezes at?", a: "0" },
];

// Return 4 random questions
router.get("/random", (req, res) => {
  const shuffled = questions.sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, 4));
});

module.exports = router;
