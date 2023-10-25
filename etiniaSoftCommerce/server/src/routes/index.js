const {Router}= require("express");
const articlesRouter = require("./articlesRoutes");



const indexRouter = Router();

indexRouter.use("/articles", articlesRouter);

module.exports = indexRouter;
