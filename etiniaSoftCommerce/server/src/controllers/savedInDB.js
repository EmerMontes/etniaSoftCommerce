const {prendas} = require('../../products/products.json');
const {Products} = require('../db')

module.exports = async(req,res) =>{
    try {
        console.log('running')
            const prenda = prendas.map(prenda => (
                {
                 id: prenda.id,
                 name: prenda.name,
                 brand: prenda.brand,
                 gender: prenda.gender,
                 size: prenda.size,
                 color: prenda.color,
                 sale: prenda.sale,
                 category: prenda.category,
                 img: prenda.image,
                 description: prenda.description,
                 price: prenda.price,
                 quantity: prenda.quantity
             }));
             await Products.bulkCreate(prenda)
            console.log('Prendas saved in Db')
    } catch (error) {
        console.log('error')
    }
}