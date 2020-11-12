const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
	//This route returns all the categories from the database
	.get((req, res) => {
		let sql = "SELECT * FROM category";

		db.query(sql, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	/**
	 * This route requires a 'name' property on the request body.
	 * Add a new category to the database.
	 */
	.post((req, res) => {
		let sql = "INSERT INTO category (name) VALUES (?)";

		db.query(sql, [req.body.name], (err, results) => {
			if (err) throw err;
			results.message = "Successfully posted new data.";
			res.send(results);
		});
	});

router.route("/:id")
	//This route returns a category based on the given ID.
	.get((req, res) => {
		let sql = "SELECT * FROM category WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	//This route deletes a category by it's ID.
	.delete((req, res) => {
		let sql = "DELETE FROM category WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			results.message = "The category was removed successfully.";
			res.send(results);
		});
	})
	/**
	 * This route requires a 'key' and a 'value' property on the request body.
	 * Patch the given 'key' with the new 'value' from the category with the given ID.
	 */
	.patch((req, res) => {
		let sql = `UPDATE category SET ${req.body.key} = ? WHERE id = ?`;

		db.query(sql, [req.body.value, req.params.id], (err, results) => {
			if (err) throw err;
			results.message = "The category was updated successfully.";
			res.send(results);
		});
	});

module.exports = router;
