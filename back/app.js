const express = require("express");
const cors = require("cors");
const app = express();

const todosRoutes = require("./routes/todos");

app.use(cors());
app.use(log);

app.get("/", (req, res) => {
    res.send("<h1> Hi, you're on the root </h1>");
})

app.use("/todos", todosRoutes);

app.listen("3000", (err) => {
    if (err) {
        console.log("Deu ruim: " + err);
        return;
    }
    console.log("Listening on port 3000");
})


function log(req, res, next) {
    console.log(`The URL requested is: ${req.url}`);
    next();
}