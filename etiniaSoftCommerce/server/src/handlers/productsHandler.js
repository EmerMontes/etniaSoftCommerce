const {
    getProductsById,
    getProductByName,
    getAllProducts,
    createProducts,
    deleteProductById ,
  } = require("../controllers/productsController");

  
  const getProductsByName = async (req, res) => {
    const name = req.params.name;
    try {
      const response = await getProductByName(name);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getProductseHandler = async (req, res) => {
    try {
      await getAllProducts(req, res, () => {
        res.status(200).json(res.paginatedResults); 
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const getIdHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const response = await getProductsById(id);
      res.status(200).send(response);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const createProductsHandler = async (req, res) => {
    try {
      const product = await createProducts(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deleteProductsHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await deleteProductById (id);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const updateProductsHandler = async (req, res) => {
    const id = req.params.id;
    try {
      const product = await updateProductById (id, req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  
  // /:id = params si modifica
  // query === ? name&raza, no modifica la ruta
  
  module.exports = {
    getProductseHandler: getProductseHandler,
    getIdHandler: getIdHandler,
    getProductsByName: getProductsByName,
    createProductsHandler: createProductsHandler,
    deleteProductsHandler:deleteProductsHandler,

    updateProductsHandler: updateProductsHandler

  };
  