const {Articles} = require('../db');

const getAllProducts = async () => {
         
    const product = await Articles.findAll();

    return product;
                                  
}

module.exports = {
    getAllProducts
};