const User = require('./users');
const Purchase = require('./purchases');
const Reviews = require('./reviews')

User.hasMany(Purchase, { foreignKey: 'userId' });
Purchase.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Reviews, { foreingKey: 'userId'});
Reviews.belongsTo(User, { foreignKey: 'userId'});
