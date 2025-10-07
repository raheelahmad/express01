const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello!");
});

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log("Started");
});
