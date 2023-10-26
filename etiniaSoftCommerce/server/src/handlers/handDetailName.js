const {getDetailName} = require('../controllers/getDetailName')

const  handDetailName = async (req, res) => {


    try {
        const {name} = req.params;
        const products = await getDetailName(name);
        return res.status(200).json(products);

     } catch (error) {
         return res.status(500).send(error.message)
     }


}

module.exports = {
    handDetailName
}