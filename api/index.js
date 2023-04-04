const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const surveyMockData = {
  data: {
    type: 'surveys',
    attributes: {
      title: 'Film feedback form',
      description:
        '<p>Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
      questions: [
        {
          questionId: 'film',
          questionType: 'text',
          label: 'What film did you watch?',
          required: true,
          attributes: null,
        },
        {
          questionId: 'review',
          questionType: 'rating',
          label: 'How would you rate the film? (1 - Very bad, 5 - Very good)',
          required: true,
          attributes: {
            min: 1,
            max: 5,
          },
        },
      ],
    },
  },
};

const internalServerErrorResponse = (res) => {
  res.status(500).json({
    errors: [
      {
        title: 'Internal Server Error',
        detail: "Something went wrong. We're working on it!",
      },
    ],
  });
};

app.get('/api/v1/survey', (req, res) => {
  // Mock error response
  // internalServerErrorResponse(res);
  return res.json(surveyMockData);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
