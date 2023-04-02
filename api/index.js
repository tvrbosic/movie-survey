const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

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
  const file = path.join(process.cwd(), 'data', 'survey.json');

  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      // Error reading file
      internalServerErrorResponse(res);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      return res.json(jsonData);
    } catch (error) {
      // Error parsing JSON
      internalServerErrorResponse(res);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
