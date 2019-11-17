const sequelize = require('./config');
const attribute = require('./Project_attribute');


const { INTEGER, STRING, DATE, NOW} = sequelize.Sequelize;
let Project = sequelize.define('project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: STRING(32), unique: true, allowNull: false },
    author: { type: STRING(32), allowNull: false },
    created_at: { type: DATE, defaultValue: NOW },
    updated_at: { type: DATE, defaultValue: NOW }

})

module.exports = Project;