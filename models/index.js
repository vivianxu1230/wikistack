const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
var validator = require('validator');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   isEmail: true,
    // },
  },
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    allowNull: false,
  },
});

Page.beforeValidate((pageInstance, optionsObj) => {
  pageInstance.replace(/\s+/g, '_').replace(/\W/g, '');
});

module.exports = {
  db,
  Page,
  User,
};
