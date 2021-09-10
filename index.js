const express = require ('express');
const app = express ();
const bodyParser = require("body-parser");
const coonection = require("./database/database");
const connection = require('./database/database');
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

//viwm engine

app.set('view engine', 'ejs');

//static
app.use(express.static('public'));

//Body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//database
connection.authenticate()
.then(() => {
    console.log("conexao feita com sucesso");
}).catch((error) => {
    console.log(error);
})


app.use("/",categoriesController);
app.use("/",articlesController);



app.get("/", (req, res) => {
    res.render("index");
})

app.listen(8082, () => {
    console.log("O servidor esta rodando")
})