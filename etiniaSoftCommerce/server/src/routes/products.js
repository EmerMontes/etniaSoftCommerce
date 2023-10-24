const { Router } = require("express");
const {getAllProducts, getNameProduct, getProductById} = require("../handlers/productsHandler");

const productsRouter = Router();

countryRouter.get("", getAllProducts);

countryRouter.get("/name", getNameProduct)

countryRouter.get("/:id", getProductById);

module.exports = productsRouter