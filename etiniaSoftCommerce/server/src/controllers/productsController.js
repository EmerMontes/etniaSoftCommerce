const { Products } = require("../db");
const { Op } = require("sequelize");


const paginateAllProducts = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const results = {};

  // Obtén los parámetros de consulta de la URL
  const { name, brand, color, sale, size, price, gender, category } = req.query;

  // Crea un objeto de condiciones vacío
  const whereConditions = {};

  // Agrega condiciones al objeto según los parámetros de consulta
  if (name) {
    whereConditions.name = {
      [Op.iLike]: `%${name}%`,
    };
  }
  if (gender) {
    whereConditions.gender = {
      [Op.iLike]: `%${gender}%`,
    };
  }
  if (category) {
    whereConditions.category = {
      [Op.iLike]: `%${category}%`,
    };
  }
  if (color) {
    whereConditions.color = {
      [Op.iLike]: `%${color}%`,
    };
  }
  if (sale === "Sale") {
    whereConditions.sale = {
      [Op.iLike]: `%${sale}%` !== 0,
    };
  }
  if (sale === "No Sale") {
    whereConditions.sale = {
      [Op.iLike]: `%${sale}%` == 0,
    };
  }
  if (size) {
    whereConditions.size = {
      [Op.iLike]: `%${size}%`,
    };
  }
  if (price) {
    whereConditions.price = {
      [Op.iLike]: `%${price}%`,
    };
  }

  try {
    const count = await Products.count({
      where: whereConditions, // Aplica las condiciones de filtro
    });
    results.info = {
      page: page,
      limit: limit,
      total: count,
    };

    const products = await Products.findAll({
      where: whereConditions, // Aplica las condiciones de filtro
      limit: limit,
      offset: startIndex,
    });

    results.results = products;
    res.paginatedResults = results;
    next();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = paginateAllProducts;


const getAllProducts = async () => {
  console.log("hola desde geAllProducts");
  const productsDB = await Products.findAll({
    limit: 100, // Limita los resultados a 100 productos
  });
  return productsDB;
};


const getProductsById = async (id) => {
  const productDB = await Products.findByPk(id);
  return productDB;
};
const getProductByName = async (name) => {
  const productDB = await Products.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`, 
      },
    },
  });
  if (productDB.length === 0) {
    return [
      { message: "No se encontraron prductos que coincidan con la búsqueda." },
    ];
  }

  return productDB;
};
const createProducts = async (productData) => {
  try {
    const {
      name,
      id,
      brand,
      gender,
      size,
      color,
      sale,
      category,
      img,
      description,
      price,
      quantity,
    } = productData;

    const newProduct = await Products.create({
      name,
      id,
      brand,
      gender,
      size,
      color,
      sale,
      category,
      img,
      description,
      price,
      quantity,
    });

    return newProduct;
  } catch (error) {
    throw error;
  }
};
const deleteProductById = async (id) => {
  try {
    const productToDelete = await Products.findByPk(id);

    if (!productToDelete) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }

    await productToDelete.destroy();

    return `Producto con ID ${id} eliminado exitosamente.`;
  } catch (error) {
    throw error;
  }
};
const updateProductById = async (id, newData) => {
  try {
    const productToUpdate = await Products.findByPk(id);

    if (!productToUpdate) {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }

    // Actualiza los campos del producto con los nuevos datos
    await productToUpdate.update(newData);

    return productToUpdate;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  paginateAllProducts,
  getAllProducts,
  getProductsById,
  getProductByName,
  createProducts,
  deleteProductById,
  updateProductById,
};
