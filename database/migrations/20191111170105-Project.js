'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {STRING, DATE, INTEGER} = Sequelize;
    await queryInterface.createTable('project', {
      id:{type:INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
    })
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project');
  }
};
