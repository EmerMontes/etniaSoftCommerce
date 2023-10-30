const { Products } = require("../db");

const getAllProducts = async (req, res, next) => {
  const results = {};

  try {
    const products = await Products.findAll();

    results.results = products;
    res.paginatedResults = results;
    next();
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllProducts,
};