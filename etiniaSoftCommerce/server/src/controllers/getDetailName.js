const {Articles} = require('../db');

const getDetailName = async ( name ) => {
         
    const product = await Articles.findAll({where: {name: name},});

    return product;
                                  
}

module.exports = {
    getDetailName
};