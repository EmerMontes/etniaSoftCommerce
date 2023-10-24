const { Router } = require("express");
const productsRouter = require("./products");
const usersRouter = require("./users")

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);

module.exports = router;