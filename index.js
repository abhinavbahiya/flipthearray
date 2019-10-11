const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const {
  flipTheArray
} = require('./flipTheArray');
const {
  product
} = require('./productRecomendation');

app.use(bodyParser.json());
app.post('/flipthearray', flipTheArray);

app.post('/product', product);


app.listen(port, () => {
  console.log(`App is up on http://localhost:${port}`);
});
