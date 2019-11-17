'use strict';

module.exports = {
  up:async (queryInterface, Sequelize) => {
    const {INTEGER} = Sequelize;
    await queryInterface.createTable('project_attribute',{
      id:{type: INTEGER, primaryKey:true, defaultValue:1},
      project_amount:{type: INTEGER, allowNull:false}
    })
  },

  down:async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project_attribute');
  }
};
