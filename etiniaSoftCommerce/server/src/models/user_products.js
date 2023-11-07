const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user_products',{
        UserId:{
            type: DataTypes.INTEGER,
        },
        ProductId: {
            type: DataTypes.INTEGER,
        },
        isFavorite: {
            type: DataTypes.BOOLEAN,
        },
        isCart: {
            type: DataTypes.BOOLEAN,
        }
    }, { timestamps: false });
}