const express = require('express');
const router = express.Router();
const addPage = require('/Users/vivianxu1230/fullstack/wikistack/views/addPage.js');
module.exports = router;

router.get('/', (req, res) => {
  res.send('welcome to the wiki');
});

router.post('/', (req, res) => {
  res.json(req.body);
});

router.get('/add', (req, res) => {
  res.send(addPage());
});
