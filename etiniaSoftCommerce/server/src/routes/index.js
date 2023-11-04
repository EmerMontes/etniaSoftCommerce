indexRouter= require("express").Router();

const productsRouter = require("./productsRoute");
const userRouter = require("./usersRouter");
const emailRouter = require("./emailRouter");



indexRouter.use("/products", productsRouter);
indexRouter.use("/users", userRouter);
indexRouter.use("/email", emailRouter);

module.exports = indexRouter;
