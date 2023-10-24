const getAllProducts = async (req, res) => {
  try {
    res.send("Esta ruta devuelve todos los productos");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNameProduct = async (req, res) => {
  try {
    res.send("Esta ruta devuelve la busqueda de producto mediante SEARCHBAR");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    res.send("Esta ruta devuelve un producto requerido por ID");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getNameProduct,
  getProductById,
};
