const {
    getEmpresa,
    createEmpresa,
    deleteEmpresaById,
    updateEmpresaById,
    getCuentas,
    createCuentas,
    deleteCuentaById,
    updateCuentaById,
    getMedioPago,
    createMedioPago,
    deleteMedioPagoById,
    updateMedioPagoById,
    getTransportadora,
    createTransportadora,
    deleteTransportadoraById,
    updateTransportadoraById
  } = require("../controllers/tablesController");
  
  
  // CRUD Empresa
  const getEmpresaHandler = async (req, res) => {
    try {
        const empresa = await getEmpresa();
        res.status(200).json(empresa);
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
   
  const createEmpresaHandler = async (req, res) => {
    try {
      const empresa = await createEmpresa(req.body);
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteEmpresaHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const empresa = await deleteEmpresaById(id);
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateEmpresaHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const empresa = await updateEmpresaById(id, req.body);
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // CRUD Cuentas Bancarias
  const getCuentasHandler = async (req, res) => {
    try {
        const cuentas = await getCuentas();
        res.status(200).json(cuentas);
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
   
  const createCuentasHandler = async (req, res) => {
    try {
      const cuenta = await createCuentas(req.body);
      res.status(201).json(cuenta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteCuentasHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const cuenta = await deleteCuentaById(id);
      res.status(201).json(cuenta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateCuentasHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const cuenta = await updateCuentaById(id, req.body);
      res.status(201).json(cuenta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // CRUD Medios de Pago
  const getMedioHandler = async (req, res) => {
    try {
        const medio = await getMedioPago();
        res.status(200).json(medio);
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
   
  const createMedioHandler = async (req, res) => {
    try {
      const medio = await createMedioPago(req.body);
      res.status(201).json(medio);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteMedioHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const medio = await deleteMedioPagoById(id);
      res.status(201).json(medio);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateMedioHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const medio = await updateMedioPagoById(id, req.body);
      res.status(201).json(medio);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // CRUD Transportadora
  const getTransportHandler = async (req, res) => {
    try {
        const logistica = await getTransportadora();
        res.status(200).json(logistica);
      
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
   
  const createTransportHandler = async (req, res) => {
    try {
      const logistica = await createTransportadora(req.body);
      res.status(201).json(logistica);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteTransportHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const empresa = await deleteEmpresaById(id);
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateTransportHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const empresa = await updateEmpresaById(id, req.body);
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
 
  
  module.exports = {
        getEmpresaHandler,createEmpresaHandler, updateEmpresaHandler, deleteEmpresaHandler,   
        getCuentasHandler, createCuentasHandler, updateCuentasHandler, deleteCuentasHandler,
        getMedioHandler, createMedioHandler, updateMedioHandler, deleteMedioHandler,
        getTransportHandler, createTransportHandler, updateTransportHandler, deleteTransportHandler
  };