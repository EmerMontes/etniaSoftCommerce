userRouter = require("express").Router();
const {confirmEmail,postUsersRegsiter,getUsersHandler, getIdHandler, getUsersByName, createUsersHandler,deleteUserHandler,updateUserHandler, loginUserHandler} = require("../handlers/userHandler")
//IMPORTAR DE EMAIL Y CREAR RUTA 

userRouter.get("/", getUsersHandler);
userRouter.get("/:id", getIdHandler);
userRouter.get("/name/:name",getUsersByName);
userRouter.post("/",createUsersHandler);
userRouter.delete("/delete/:id", deleteUserHandler);
userRouter.put("/put/:id", updateUserHandler);
userRouter.post('/login', loginUserHandler);
userRouter.post('/register', postUsersRegsiter);
userRouter.get('/confirm/:token',confirmEmail);
module.exports = userRouter;
