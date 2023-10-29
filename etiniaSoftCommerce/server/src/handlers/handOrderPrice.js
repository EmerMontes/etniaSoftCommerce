const {paginateAllProducts} = require('../controllers/productsController')

const  handOrderPrice = async (req, res) => {


    try {

        const products = await paginateAllProducts();
        const {order} = req.params;
        if (order === 'A'){
            products.sort((a,b) => a.price - b.price );

        } else {
            products.sort((a,b) => b.price - a.price);

        }
        
        return res.status(200).json(products);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    handOrderPrice
}

