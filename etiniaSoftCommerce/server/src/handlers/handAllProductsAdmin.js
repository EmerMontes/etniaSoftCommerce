const {getAllProducts} = require('../controllers/getAllProducts')

const  handAllProducts = async (req, res) => {


    try {
             
        const allProducts = await getAllProducts();
        return res.status(200).json(allProducts);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    handAllProducts
}