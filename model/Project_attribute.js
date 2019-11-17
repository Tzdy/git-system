const sequelize = require('./config');
const {INTEGER} = sequelize.Sequelize;

let options = {
    createdAt:false,
    updatedAt:false
}

module.exports = sequelize.define('project_attribute',{
    id:{type:INTEGER, primaryKey:true, defaultValue:1},
    project_amount:{type: INTEGER, allowNull:false},
},options)