const getAllUsers = async(req, res) =>{
    try {
        res.send("Esta ruta devuelve todos los usuarios");
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllUsers,
}