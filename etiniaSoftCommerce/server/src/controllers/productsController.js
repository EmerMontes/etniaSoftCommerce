
const { Products } = require("../db");
console.log(Products)
const { Op } = require("sequelize");

const paginateAllProducts = (model) => {
  return async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    try {
      const count = await model.count();
      if (endIndex < count) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    const products = await model.findAll({
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
};
const getProductsById = async (id) => {
  const productDB = await Products.findByPk(id);
  return productDB;
};
const getProductByName = async (name) => {
  const productDB = await Products.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`, // Búsqueda de coincidencia parcial insensible a mayúsculas/minúsculas
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
  getAllProducts: paginateAllProducts(Products),
  getProductsById,
  getProductByName,
  createProducts,
  deleteProductById,

  updateProductById
};
