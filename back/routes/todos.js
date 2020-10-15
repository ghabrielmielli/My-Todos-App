const router = require("express").Router();

router.route("/")
.get((req, res) => {
    res.send("Todo list :)");
})
.post((req, res) => {
    res.send("Yo posting on todo list :D");
})

router.route("/:id")
.get((req, res) => {
    res.send("Todo list item " + req.params.id);
})
.post((req, res) => {
    res.send(`Yo posting ${req.params.id} on todo list :D`);
})

module.exports = router;