const {createFav} = require("../controllers/favsController");

const getAllFavorites = async (req, res)=>{
    try {
        const userId = req.params;
        res.send("TODOS LOS FAVORITOS");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const postFavorite = async (req, res)=>{
    const {UserId, ProductId} = req.body
    try {
        if(!UserId || !ProductId){return res.status(400).json("Missing data")};
        
        let favorite = await createFav({UserId, ProductId});
        res.json(favorite);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteFavorite = async (req, res)=>{
    try {
        res.send("QUITAR FAV");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllFavorites,
    postFavorite,
    deleteFavorite
}