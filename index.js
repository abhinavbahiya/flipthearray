const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const flipTheArray = require('./flipTheArray');
const product = require('./productRecomendation');

app.post('/flipthearray', flipTheArray);

app.post('/product', product);


app.listen(port, () => {
  console.log(`App is up on http://localhost:${port}`);
});
