const Sequelize = require('sequelize');
const { sequelize } = require('./models/index'); 
require('./model-relationships'); 

async function initializeDatabase() {
  try {
    await sequelize.sync(); 
    console.log('Database tables synchronized');
  } catch (error) {
    console.error('Error syncing database tables:', error);
  }
}

module.exports = {
  initializeDatabase,
};