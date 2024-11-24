const express = require("express");
const router = express.Router();
const Quiz = require("../models/quizModel");

router.get("/getQuiz", async (req, res) => {
  const { userId } = req.query;

  try {
    let quizzes;

    if (userId) {
      // If userId is provided, filter quizzes by userId
      quizzes = await Quiz.find({ user: userId });
    } else {
      // If userId is not provided, return all quizzes
      quizzes = await Quiz.find();
    }

    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong from backend");
  }
});

module.exports = router;