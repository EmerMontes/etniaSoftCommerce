const {Products} = require('../db');

const getAllProducts = async () => {
         
    const product = await Products.findAll();

    return product;
                                  
}

module.exports = {
    getAllProducts
};