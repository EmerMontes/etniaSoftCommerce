require("dotenv").config();
const { Sequelize } = require("sequelize");

const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY
} = process.env;

const sequelize = new Sequelize(`oracle://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/softComerce`, {
  logging: false, 
  native: false, 
});

//const sequelize = new Sequelize(DB_DEPLOY, {
//  logging: false, 
//  native: false, 
//});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Articles, User, Shipments, bank_Accounts, company, complaints, Coupon, Invoice, logistics, Payment_Method, Purchase, reviews } = sequelize.models;

User.hasMany(Purchase, {through: "user_purchase"});
Purchase.belongsToMany(User, {through: "user_purchase"});

User.hasMany(bank_Accounts, {through: "user_bank_accounts"});
bank_Accounts.belongsTo(User, {through: "user_bank_accounts"});

logistics.hasMany(Shipments, {through: "logistics_shipments"});
Shipments.belongsTo(logistics, {through: "logisctics_shpments"});

User.hasMany(complaints, {through: "user_complaints"});
complaints.belongsTo(User, {through: "user_complaints"});

company.hasMany(Invoice, {through: "company_invoice"});
Invoice.belongsTo(company, {through: "company_invoice"});

User.hasOne(Payment_Method, {through: "user_paymentMethod"});
Payment_Method.belongsTo(User, {through: "user_paymentMethod"});

User.hasMany(Articles, {through: "user_articles"});
Articles.belongsToMany(User, {through: "user_articles"});

User.hasMany(Coupon, {through: "user_coupon"});
Coupon.belongsTo(User, {through: "user_coupon"});

User.hasMany(Shipments, {through: "user_shipments"});
Shipments.belongsTo(User, {through: "user_shpments"});

User.hasMany(reviews, {through: "user_reviews"});
reviews.belongsTo(User, {through: "user_reviews"});

User.hasMany(Invoice, {through: "user_invoice"});
Invoice.belongsTo(User, {through: "user_invoice"});



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
