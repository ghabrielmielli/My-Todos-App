const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
	.get((req, res) => {
		let sql = "SELECT * FROM category";

		db.query(sql, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	.post((req, res) => {
		let sql = "INSERT INTO category (name) VALUES (?)";

		db.query(sql, [req.body.name], (err, results) => {
			if (err) throw err;
			results.message = "Successfully posted new data.";
			res.send(results);
		});
	});

router.route("/:id")
	.get((req, res) => {
		let sql = "SELECT * FROM category WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	.post((req, res) => {
		res.send(`Yo posting ${req.params.id} on category list :D`);
	})
	.patch((req, res) => {
		let sql = `UPDATE category SET ${req.body.key} = ? WHERE id = ?`;

		db.query(sql, [req.body.value, req.params.id], (err, results) => {
			if (err) throw err;
			results.message = "The category was updated successfully.";
			res.send(results);
		});
	});

module.exports = router;
