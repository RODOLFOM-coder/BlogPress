const Sequelize  = require("sequelize");
const connection = require("../database/database");

const Category = connection.define('categorires',{
    title:{
        type: Sequelize.STRING,
        AllowNull: false
    },slug: {
        type: Sequelize.STRING,
        AllowNull: false
    }
})

module.exports = category;