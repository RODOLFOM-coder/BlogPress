const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress', 'root', 'ChineloN91#',{
host: 'localhost',
dialect: 'mysql'
});

module.exports = connection;