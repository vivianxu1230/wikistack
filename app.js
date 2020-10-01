const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout');
const { db } = require('./models');
// const { Page } = require('./models');
// const { User } = require('./models');

app.use(morgan('dev'));
app.use(express.urlencoded());

app.use(express.static('/Users/vivianxu1230/fullstack/wikistack/public'));

app.get('/', (req, res) => {
  res.redirect('/wiki');
  res.send(layout());
});

app.use('/wiki', require('./routes/wiki'));

app.use('/users', require('./routes/users.js'));

const PORT = 4000;

const connect = async () => {
  try {
    await db.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
    });
  } catch (err) {
    console.log('There was an error!', err);
  }
};

connect();
