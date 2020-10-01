const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { db } = require('./models');

app.use(morgan('dev'));

app.use(express.static('/Users/vivianxu1230/fullstack/wikistack/public'));

app.get('/', (req, res) => {
  res.send(layout());
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
