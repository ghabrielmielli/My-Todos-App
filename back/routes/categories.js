const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
.get((req, res) => {

    let sql = "SELECT * FROM category";

    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})

router.route("/:id")
.get((req, res) => {
    let sql = "SELECT * FROM category WHERE id = ?";
    
    db.query(sql, req.params.id, (err, results) => {
        if (err) throw err;
        res.send(results);
    })
})
.post((req, res) => {
    res.send(`Yo posting ${req.params.id} on category list :D`);
})

module.exports = router;