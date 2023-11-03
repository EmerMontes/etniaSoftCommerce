productsRouter = require("express").Router();

const {getAllProductseHandler,getProductseHandler, getIdHandler, getProductsByName,
      createProductsHandler,deleteProductsHandler,updateProductsHandler, restoreProductHandler} = require("../handlers/productsHandler")

productsRouter.get("/", getProductseHandler);
productsRouter.get("/all-products",getAllProductseHandler);

productsRouter.get("/:id", getIdHandler);
productsRouter.get("/name/:name",getProductsByName);

productsRouter.post("/",createProductsHandler);
productsRouter.post('/products/restore/:id', restoreProductHandler)
productsRouter.delete("/delete/:id", deleteProductsHandler);
productsRouter.put("/put/:id", updateProductsHandler);
module.exports = productsRouter;
