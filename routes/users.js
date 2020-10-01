const express = require('express');
const router = express.Router();
module.exports = router;
const { Page } = require('../models');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.redirect('/');
  } catch (error) {
    next(error);
  }
});
