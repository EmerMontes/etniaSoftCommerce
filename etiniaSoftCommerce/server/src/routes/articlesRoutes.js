articleRouter = require("express").Router();
const {getArticleHandler} = require("../handlers/articlehandler")

articleRouter.get("/", getArticleHandler);

module.exports = articleRouter;
