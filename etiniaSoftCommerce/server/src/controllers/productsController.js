
const { Products, User } = require("../db");
console.log(Products)
const { Op } = require("sequelize");

const getAllProducts = async () => {

  const productDB = await Products.findAll();
  console.log("lista de todos los productos");
  return productDB;
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
module.exports = {
  getAllProducts,
  getProductsById,
  getProductByName,
  createProducts,
  deleteProductById
};
