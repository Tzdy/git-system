const sequelize = require('./config');

const {INTEGER, STRING, DATE} = sequelize.Sequelize;
module.exports = sequelize.define('project',{
    id:{ type: INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:STRING(32), allowNull:false},
    author:{type:STRING(32), allowNull:false},
    created_at:{type: DATE},
    updated_at:{type:DATE}
    
})