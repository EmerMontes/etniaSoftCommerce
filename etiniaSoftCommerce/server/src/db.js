
//const Sequelize = require('sequelize');
const { sequelize } = require('./models/index'); 
const {db} = require('./models/index'); 

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

