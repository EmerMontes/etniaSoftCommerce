const { Router } = require("express");
const getAllUsers = require("../handlers/usersHandler");

const usersRouter = Router();

countryRouter.get("", getAllUsers);

module.exports = usersRouter;