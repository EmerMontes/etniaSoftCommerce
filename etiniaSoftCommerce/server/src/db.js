// Cargamos la configuración de variables de entorno desde un archivo .env
require("dotenv").config();
const { Sequelize } = require("sequelize"); // Importamos la librería Sequelize para trabajar con la base de datos

const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; // Obtenemos las variables de entorno necesarias para la conexión a la base de datos

// Creamos una instancia de Sequelize para establecer la conexión a la base de datos
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/softCommerce`,
  {
    logging: false, // Deshabilitamos la salida de registros de SQL en la consola
    native: false, // No utilizamos el driver nativo de PostgreSQL
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos los archivos en el directorio "/models" y los importamos como modelos
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Asociamos los modelos a la instancia de Sequelize
modelDefiners.forEach((model) => model(sequelize));

// Cambiamos el nombre de las tablas para que comiencen con mayúsculas
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Definimos las relaciones entre las tablas
const {
  Company,
  Reviews,
  PaymentMethod,
  Purchases,
  Coupon,
  Invoice,
  BankAccounts,
  Logistics,
  Complaints,
  Products,
  Shipments,
  User,
} = sequelize.models;

// Relaciones entre las tablas
// Relación muchos a muchos entre User y Products a través de la tabla "user_products"
User.belongsToMany(Products, { through: "user_products" });
Products.belongsToMany(User, { through: "user_products" });

// User tiene muchas Shipments con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Shipments, { foreignKey: "userId", sourceKey: "id" });
// Shipments pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Shipments.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User tiene muchas BankAccounts con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(BankAccounts, { foreignKey: "userId", sourceKey: "id" });
// BankAccounts pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
BankAccounts.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User tiene muchas Complaints con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Complaints, { foreignKey: "userId", sourceKey: "id" });
// Complaints pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Complaints.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User tiene muchas Coupon con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Coupon, { foreignKey: "userId", sourceKey: "id" });
// Coupon pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Coupon.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// User tiene muchas Invoice con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Invoice, { foreignKey: "userId", sourceKey: "id" });
// Invoice pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Invoice.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// Company tiene muchas Invoice con una clave foránea "companyId" que se relaciona con la clave primaria "id" de Company
Company.hasMany(Invoice, { foreignKey: "companyId", sourceKey: "id" });
// Invoice pertenece a Company con una clave foránea "companyId" que se relaciona con la clave primaria "id" de Company
Invoice.belongsTo(Company, { foreignKey: "companyId", targetKey: "id" });

// Purchases tiene una relación uno a uno con Invoice con una clave foránea "purchaseId" que se relaciona con la clave primaria "id" de Purchases
Purchases.hasOne(Invoice, { foreignKey: "purchaseId", sourceKey: "id" });
// Invoice pertenece a Purchases con una clave foránea "purchaseId" que se relaciona con la clave primaria "id" de Purchases
Invoice.belongsTo(Purchases, { foreignKey: "purchaseId", targetKey: "id" });

// PaymentMethod tiene una relación uno a uno con Invoice con una clave foránea "paymentMethodId" que se relaciona con la clave primaria "id" de PaymentMethod
PaymentMethod.hasOne(Invoice, {
  foreignKey: "paymentMethodId",
  sourceKey: "id",
});
// Invoice pertenece a PaymentMethod con una clave foránea "paymentMethodId" que se relaciona con la clave primaria "id" de PaymentMethod
Invoice.belongsTo(PaymentMethod, {
  foreignKey: "paymentMethodId",
  targetKey: "id",
});

// Products tiene una relación uno a uno con Purchases con una clave foránea "productsId" que se relaciona con la clave primaria "id" de Products
Products.hasOne(Purchases, { foreignKey: "productsId", sourceKey: "id" });
// Purchases pertenece a Products con una clave foránea "productsId" que se relaciona con la clave primaria "id" de Products
Purchases.belongsToMany(Products, { through: "product_purchases" });

// User tiene muchas Purchases con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Purchases, { foreignKey: "userId", sourceKey: "id" });
// Purchases pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Purchases.belongsTo(User, { foreignKey: "userId", sourceKey: "id" });

// User tiene una relación uno a uno con PaymentMethod con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasOne(PaymentMethod, { foreignKey: "userId", sourceKey: "id" });
// PaymentMethod pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
PaymentMethod.belongsToMany(User, { through: "user_paymentMethod" });

// User tiene muchas Reviews con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
User.hasMany(Reviews, { foreignKey: "userId", sourceKey: "id" });
// Reviews pertenece a User con una clave foránea "userId" que se relaciona con la clave primaria "id" de User
Reviews.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

// Products tiene muchas Reviews con una clave foránea "productId" que se relaciona con la clave primaria "id" de Products
Products.hasMany(Reviews, { foreignKey: "productId", sourceKey: "id" });
// Reviews pertenece a Products con una clave foránea "productId" que se relaciona con la clave primaria "id" de Products
Reviews.belongsTo(Products, { foreignKey: "productId", targetKey: "id" });

// Logistics tiene muchas Shipments con una clave foránea "logisticsId" que se relaciona con la clave primaria "id" de Logistics
Logistics.hasMany(Shipments, { foreignKey: "logisticsId", sourceKey: "id" });
// Shipments pertenece a Logistics con una clave foránea "logisticsId" que se relaciona con la clave primaria "id" de Logistics
Shipments.belongsTo(Logistics, { foreignKey: "logisticsId", targetKey: "id" });

PaymentMethod.hasOne(Invoice, {
  foreignKey: "paymentMethodId",
  sourceKey: "id",
});
Invoice.belongsTo(PaymentMethod, {
  foreignKey: "paymentMethodId",
  targetKey: "id",
});

Products.hasOne(Purchases, { foreignKey: "productsId", sourceKey: "id" });
Purchases.belongsToMany(Products, { through: "product_purchases" });

User.hasMany(Purchases, { foreignKey: "userId", sourceKey: "id" });
Purchases.belongsTo(User, { foreignKey: "userId", sourceKey: "id" });

User.hasOne(PaymentMethod, { foreignKey: "userId", sourceKey: "id" });
PaymentMethod.belongsToMany(User, { through: "user_paymentMethod" });

User.hasMany(Reviews, { foreignKey: "userId", sourceKey: "id" });
Reviews.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Products.hasMany(Reviews, { foreignKey: "productId", sourceKey: "id" });
Reviews.belongsTo(Products, { foreignKey: "productId", targetKey: "id" });

Logistics.hasMany(Shipments, { foreignKey: "logisticsId", sourceKey: "id" });
Shipments.belongsTo(Logistics, { foreignKey: "logisticsId", targetKey: "id" });

// Exportamos los modelos y la instancia de Sequelize
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importar la conexión { conn } = require('./db.js');
};
