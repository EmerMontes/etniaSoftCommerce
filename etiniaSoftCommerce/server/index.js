const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const express = require('express');
const app = express();
const { paginate } = require ('./src/pagination/pagination');
const { getAllProducts } = require('./src/controllers/getAllProducts');
const PORT = 3001;

app.get('/list', async (req, res) => {
  const page = req.query.page || 1;
  const itemsPerPage = req.query.itemsPerPage || 10;

  try {
    const productData = await getAllProducts();
    const paginatedProducts = paginate(productData, page, itemsPerPage);
    res.json(paginatedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal server error'})
  }
});

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

}).catch(error => console.error(error))


