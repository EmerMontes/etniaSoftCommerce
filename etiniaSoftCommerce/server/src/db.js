const { Sequelize } = require("sequelize");
const Drivers = require("./models/Driver.js");
const Teams = require("./models/Teams.js");
require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/nameee`, {
  logging: false,
});


const driverM = Drivers(sequelize);
const teamM = Teams(sequelize);

 teamM.hasMany(driverM);
 driverM.hasMany(teamM);



module.exports = {
    teamM,
    driverM,
  conn: sequelize,
};
