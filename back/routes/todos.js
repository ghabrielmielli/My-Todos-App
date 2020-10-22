const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
.get((req, res) => {

    let sql = "SELECT * FROM todo";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})
.post((req, res) => {
    let sql = "INSERT INTO todo (name, category) VALUES (?, ?)";
    console.log("imprimindo valores:");
    console.log("nome: " + req.body.name);
    console.log("categoria: " + req.body.category);
    db.query(sql, [req.body.name, req.body.category], (err, results) => {
        if (err) throw err;
        results.message = "Successfully posted new data";
        res.send(results);
    })
    
});

router.route("/:id")
.get((req, res) => {
    let sql = "SELECT * FROM todo WHERE id = ?";
    
    db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
});

module.exports = router; 