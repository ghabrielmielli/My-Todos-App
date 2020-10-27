const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
	.get((req, res) => {
		let sql = "SELECT * FROM todo";

		db.query(sql, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	.post((req, res) => {
		let sql = "INSERT INTO todo (name, category) VALUES (?, ?)";

		db.query(sql, [req.body.name, req.body.category], (err, results) => {
			if (err) throw err;
			results.message = "Successfully posted new data.";
			res.send(results);
		});
	});

router.route("/:id")
	.get((req, res) => {
		let sql = "SELECT * FROM todo WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	.delete((req, res) => {
		let sql = "DELETE FROM todo WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			results.message = "The todo was removed successfully.";
			res.send(results);
		});
	})
	.patch((req, res) => {
		let key = Object.keys(req.body)[0];
		let value = Object.values(req.body)[0];

		let sql = `UPDATE todo SET ${key} = ? WHERE id = ?`;

		db.query(sql, [value, req.params.id], (err, results) => {
			if (err) throw err;
			results.message = "The todo was updated successfully.";
			res.send(results);
		});
	});

module.exports = router;
