const sequelize = require('./config');
const {INTEGER} = sequelize.Sequelize;

let options = {
    createdAt:false,
    updatedAt:false
}

module.exports = sequelize.define('attribute',{
    project_amount:{type: INTEGER, allowNull:false},
},options)