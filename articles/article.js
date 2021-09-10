const Sequelize  = require("sequelize");
const connection = require("../database/database");

const Article = connection.define('article',{
    title:{
        type: Sequelize.STRING,
        AllowNull: false
    },slug: {
        type: Sequelize.STRING,
        AllowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        AllowNull: false
    }
})

module.exports = Article;