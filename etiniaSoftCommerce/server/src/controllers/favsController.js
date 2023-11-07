const { User, Products} = require("../db");

const createFav = async({UserId, ProductId})=>{
    const user =  await User.findOne({ where:{id: UserId}});
    
    const existingFavorite = await User.findOne({
        where: {
            id: UserId,
        },include: {model: Products, where:{id: ProductId}}
    });
    console.log(existingFavorite);

    if (existingFavorite) {
        await existingFavorite.Products[0].user_products.update({isFavorite: true})
        return (existingFavorite);
    } else {
        const newFavorite = await user.addProduct(ProductId, { through: { isFavorite: true } });
        return (newFavorite);
    }
}

module.exports = {
    createFav,
}