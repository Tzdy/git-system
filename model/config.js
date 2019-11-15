var Sequelize = require('sequelize');

let product = new Sequelize({
    dialect: 'sqlite',
    storage: './gitsystem.db',
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true,
        freezeTableName: true
        //关闭自动复数
    }
});

let dev = new Sequelize({
    dialect: 'sqlite',
    storage: './gitsystem.db',
    define: {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true,
        freezeTableName: true
        //关闭自动复数
    },
    logging:false
});

module.exports = dev;

