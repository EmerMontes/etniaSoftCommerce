const {prendas} = require('../../products/products.json')
const {Products} = require('../db')

module.exports = async(req,res) =>{
    try {
        //  console.log('running')
        //    const prenda = prendas.map(prend => {
        // //       const cantidad =  prenda.size.reduce((sum, size) => sum + size.cantidad, 0);     
        // //       console.log(prenda.size)
        //        return {
        //              id: prend.id,
        //              name: prend.name,
        //             brand: prend.brand,
        //             gender: prend.gender,
        //             color: prend.color,
        //             sale: prend.sale,
        //             category: prend.category,
        //             img: prend.image,
        //            description: prend.description,
        //            price: prend.price,
        //            size: prend.size,
        //            quantity: prend.quantity
        //      } 
        //  }
        //  );
        await Products.bulkcreate(prendas)
            console.log('Prendas saved in Db')
    } catch (error) {
        console.log('error')
    }
}