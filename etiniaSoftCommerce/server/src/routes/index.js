const {Router}= require("express");
//const importModelo = require("./modelo");
const articleRouter = require("./articlesRoutes")


const indexRouter = Router();


indexRouter.use("/articles", articleRouter);

module.exports = indexRouter;
