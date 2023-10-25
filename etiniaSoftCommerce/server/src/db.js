const { Sequelize } = require("sequelize");
//const Drivers = require("./models/Driver.js");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false,
});

module.exports = {

  conn: sequelize,
};
