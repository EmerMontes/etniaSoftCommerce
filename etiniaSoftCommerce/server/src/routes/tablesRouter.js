tablesRouter = require("express").Router();

const {getEmpresaHandler,createEmpresaHandler, updateEmpresaHandler, deleteEmpresaHandler,   
        getCuentasHandler, createCuentasHandler, updateCuentasHandler, deleteCuentasHandler,
        getMedioHandler, createMedioHandler, updateMedioHandler, deleteMedioHandler,
        getTransportHandler, createTransportHandler, updateTransportHandler, deleteTransportHandler
      } = require("../handlers/tablesHandler")

//Empresa
productsRouter.get("/getempresa", getEmpresaHandler);
productsRouter.post("/postempresa",createEmpresaHandler);
productsRouter.delete("/deleteempresa/:id", deleteEmpresaHandler);
productsRouter.put("/putempresa/:id", updateEmpresaHandler);

//Cuentas
productsRouter.get("/getcuentas", getCuentasHandler);
productsRouter.post("/postcuentas",createCuentasHandler);
productsRouter.delete("/deletecuentas/:id", deleteCuentasHandler);
productsRouter.put("/putcuentas/:id", updateCuentasHandler);

//Medio Pago

productsRouter.get("/getmediopago", getMedioHandler);
productsRouter.post("/postmediopago",createMedioHandler);
productsRouter.delete("/deletemediopago/:id", deleteMedioHandler);
productsRouter.put("/putmediopago/:id", updateMedioHandler);

//Transportadora
productsRouter.get("/getlogistica", getTransportHandler);
productsRouter.post("/postlogistica",createTransportHandler);
productsRouter.delete("/deletelogistica/:id", deleteTransportHandler);
productsRouter.put("/putlogistica/:id", updateTransportHandler);


module.exports = productsRouter;