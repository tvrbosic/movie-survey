const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/v1/', (req, res) => {
  res.json({ message: 'Hello from Express server!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
