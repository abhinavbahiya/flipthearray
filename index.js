const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const flipTheArray = require('./flipTheArray');

app.post('/flipthearray', flipTheArray);

app.listen(port, () => {
  console.log(`App is up on http:localhost:${port}`);
});
