indexRouter= require("express").Router();

const productsRouter = require("./productsRoute");


indexRouter.use("/articles", productsRouter);


module.exports = indexRouter;
