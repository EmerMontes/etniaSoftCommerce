productsRouter = require("express").Router();
const {getProductseHandler, getIdHandler, getProductsByName, createProductsHandler,deleteProductsHandler,updateProductsHandler} = require("../handlers/productsHandler")

productsRouter.get("/", getProductseHandler);
productsRouter.get("/:id", getIdHandler);
productsRouter.get("/name/:name",getProductsByName);
productsRouter.post("/",createProductsHandler);
productsRouter.delete("/delete/:id", deleteProductsHandler);
productsRouter.put("/put/:id", updateProductsHandler);
module.exports = productsRouter;
