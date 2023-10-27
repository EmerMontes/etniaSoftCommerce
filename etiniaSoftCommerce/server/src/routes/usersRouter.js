userRouter = require("express").Router();
const {getUsersHandler, getIdHandler, getUsersByName, createUsersHandler,deleteUserHandler,updateUserHandler} = require("../handlers/userHandler")

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getIdHandler);
userRouter.get("/name/:name",getUsersByName);
userRouter.post("/",createUsersHandler);
userRouter.delete("/delete/:id", deleteUserHandler);
userRouter.put("/put/:id", updateUserHandler);

module.exports = userRouter;
