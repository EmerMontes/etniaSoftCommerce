const {Products} = require('../db');

const getDetailName = async ( name ) => {
         
    const product = await Products.findAll({where: {name: name},});

    return product;
                                  
}

module.exports = {
    getDetailName
};