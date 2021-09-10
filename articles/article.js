const Sequelize  = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

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

Category.hasMany(Article);
Article.belongsTo(Category); //Um artigo pertence a uma categoria



module.exports = Article;