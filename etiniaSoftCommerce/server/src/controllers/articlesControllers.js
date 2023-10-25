const axios = require("axios");

const getAllAricles = async (res) => {
  try {
    const message = "Ruta de artículos funcionando correctamente";
    return message;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllAricles,
};
//prubea