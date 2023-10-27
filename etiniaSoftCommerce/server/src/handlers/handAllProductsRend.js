const {getAllProducts} = require('../controllers/productsController')

const  handAllProductsRend = async (req, res) => {
console.log('Hola mundo')

    try {
            
        const allProducts = await getAllProducts();
        
        let productsRend = [];
        let indicador = true;
        productsRend.push(allProducts[0]);
        for (let i=1; i<allProducts.length; i++) {
            indicador = true;
            for (let j=0; j<productsRend.length; j++){
                if (allProducts[i].name === productsRend[j].name) indicador = false;
            }
            if (indicador ===true) productsRend.push(allProducts[i]);
        }
        return res.status(200).json(productsRend);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    handAllProductsRend
}