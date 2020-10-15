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

router.route("/:id")
.get((req, res) => {
    let sql = "SELECT * FROM todo WHERE id = ?";
    
    db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})
.post((req, res) => {
    res.send(`Yo posting ${req.params.id} on todo list :D`);
})

module.exports = router;