const express = require("express");
const cors = require("cors");
const app = express();

const {log} = require("./middlewares");

//Global middlewares
app.use(cors());
app.use(log);



//Root router
app.get("/", (req, res) => {
    res.send("<h1> Hi, you're on the root </h1>");
})

//todos router
const todosRoutes = require("./routes/todos");
app.use("/todos", todosRoutes);

//categories router
const categoriesRoutes = require("./routes/categories");
app.use("/categories", categoriesRoutes);


//Server start
app.listen("3000", (err) => {
    console.log(err ? `Deu ruim: ${err}` : "Server running at port 3000");
});