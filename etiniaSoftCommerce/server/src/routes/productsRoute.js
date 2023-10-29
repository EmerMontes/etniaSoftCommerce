productsRouter = require("express").Router();

const {getProductseHandler, getIdHandler, getProductsByName, createProductsHandler,deleteProductsHandler,updateProductsHandler,handleProductFilters,} = require("../handlers/productsHandler")
const {handOrderPrice}=require('../handlers/handOrderPrice')

productsRouter.get("/", getProductseHandler);
productsRouter.get("/:id", getIdHandler);
productsRouter.get("/name/:name",getProductsByName);
productsRouter.get("/order/",handOrderPrice);


productsRouter.post("/",createProductsHandler);
productsRouter.delete("/delete/:id", deleteProductsHandler);
productsRouter.put("/put/:id", updateProductsHandler);
module.exports = productsRouter;
