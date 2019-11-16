'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const {STRING, DATE, INTEGER, NOW} = Sequelize;
    await queryInterface.createTable('project', {
      id:{type:INTEGER, primaryKey:true, autoIncrement:true, allowNull:false},
      name:{type:STRING(32), unique:true, allowNull:false},
      author:{type:STRING(32), allowNull:false},
      created_at:{type:DATE, defaultValue:NOW},
      updated_at:{type:DATE, defaultValue:NOW}
    })
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project');
  }
};
