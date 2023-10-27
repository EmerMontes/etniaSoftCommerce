indexRouter= require("express").Router();

const productsRouter = require("./productsRoute");
const userRouter = require("./usersRouter");



indexRouter.use("/products", productsRouter);
indexRouter.use("/users", userRouter);

module.exports = indexRouter;
