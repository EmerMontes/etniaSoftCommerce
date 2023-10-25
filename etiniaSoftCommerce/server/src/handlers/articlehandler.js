const { getAllAricles } = require("../controllers/articlesControllers");
const getArticleHandler = async (req, res) => {
  try {
    const response = await getAllAricles();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getArticleHandler: getArticleHandler,
};
