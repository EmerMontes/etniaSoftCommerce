const User = require('./users');
const Purchase = require('./purchases');

User.hasMany(Purchase, { foreignKey: 'userId' });
Purchase.belongsTo(User, { foreignKey: 'userId' });