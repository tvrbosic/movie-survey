const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuid4 } = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

const surveyMockData = {
  data: {
    type: 'surveys',
    // Following attribute is mocked by dynamically generating it on every request
    // id: '2660dd24-e2db-42c1-8093-284b1df2664c'
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

const validateAnswers = (answers) => {
  const errors = [];

  for (const answer of answers) {
    if (!answer.answer) {
      errors.push({
        source: `data/attributes/answers/${answer.questionId}`,
        detail: 'The value is required',
      });
    }
  }

  return errors;
};

app.get('/api/v1/survey', (req, res) => {
  const responseData = surveyMockData;
  responseData.data.id = uuid4();

  // Data fetching from database and processing
  // ... implement here ...

  // Mock HTTP 500 error response by uncommenting the following line
  // internalServerErrorResponse(res);
  return res.json(surveyMockData);
});

app.post('/api/v1/survey/:id/answers', (req, res) => {
  const surveyId = req.params.id;
  const surveyAnswers = req.body.data.attributes.answers;

  // Received data validation
  const errors = validateAnswers(surveyAnswers);
  if (errors.length > 0) {
    res.status(422).json({ errors: errors });
    return;
  }

  // Data processing and storing to database
  // ... implement here ...

  const response = {
    data: {
      type: 'surveyAnswers',
      id: surveyId,
      attributes: {
        answers: surveyAnswers,
      },
      relationships: {
        survey: {
          data: {
            type: 'surveys',
            id: surveyId,
          },
        },
      },
    },
  };

  // Mock HTTP 500 error response by uncommenting the following line
  // internalServerErrorResponse(res);
  res.status(201).json(response);
});

// Error handling middleware (covers all unhandled errors)
app.use(function (err, req, res, next) {
  console.error(err.stack);
  internalServerErrorResponse(res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
