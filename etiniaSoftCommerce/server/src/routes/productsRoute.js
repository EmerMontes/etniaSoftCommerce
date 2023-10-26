productsRouter = require("express").Router();
const {getProductseHandler, getIdHandler, getProductsByName, createProductsHandler,deleteProductsHandler} = require("../handlers/productsHandler")

productsRouter.get("/", getProductseHandler);
productsRouter.get("/:id", getIdHandler);
productsRouter.get("/name/:name",getProductsByName);
productsRouter.post("/",createProductsHandler);
productsRouter.delete("/delete/:id", deleteProductsHandler);

module.exports = productsRouter;
