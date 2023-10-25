const axios = require("axios");

const getAllAricles = async (res) => {
  try {
    const message = "Ruta de artículos funcionando correctamente en develop";
    return message;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  getAllAricles,
};
//prubea