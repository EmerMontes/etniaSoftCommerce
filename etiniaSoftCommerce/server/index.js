const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const express = require('express');
const prendas = require('./src/controllers/savedInDB')
const app = express();

app.use(express.json())
const PORT =  process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
  prendas();

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

}).catch(error => console.error(error))


