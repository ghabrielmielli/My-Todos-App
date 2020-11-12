const router = require("express").Router();
const db = require("../database/dbconfig");

router.route("/")
	//This route returns all the todos from the database
	.get((req, res) => {
		let sql = "SELECT * FROM todo";

		db.query(sql, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	/**
	 * This route requires a 'name' and a 'category' property on the request body.
	 * Add a new todo to the database.
	 */
	.post((req, res) => {
		let sql = "INSERT INTO todo (name, category) VALUES (?, ?)";

		db.query(sql, [req.body.name, req.body.category], (err, results) => {
			if (err) throw err;
			results.message = "Successfully posted new data.";
			res.send(results);
		});
	});

router.route("/:id")
	//This route returns a todo based on the given ID.
	.get((req, res) => {
		let sql = "SELECT * FROM todo WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			res.send(results);
		});
	})
	//This route deletes a todo by it's ID.
	.delete((req, res) => {
		let sql = "DELETE FROM todo WHERE id = ?";

		db.query(sql, req.params.id, (err, results) => {
			if (err) throw err;
			results.message = "The todo was removed successfully.";
			res.send(results);
		});
	})
	/**
	 * This route requires a 'key' and a 'value' property on the request body.
	 * Patch the given 'key' with the new 'value' from the todo with the given ID.
	 */
	.patch((req, res) => {
		let sql = `UPDATE todo SET ${req.body.key} = ? WHERE id = ?`;

		db.query(sql, [req.body.value, req.params.id], (err, results) => {
			if (err) throw err;
			results.message = "The todo was updated successfully.";
			res.send(results);
		});
	});

router.route("/fromCategory/:category")
	//This route deletes all the done todos from the category ID given.
	.delete((req, res) => {
		let sql = req.params.category > 0 ? "DELETE FROM todo WHERE category = ? AND done = true" : "DELETE FROM todo WHERE done = true";

		db.query(sql, req.params.category ? [req.params.category] : [], (err, results) => {
			if (err) throw err;
			results.message = "Successfully deleted data.";
			res.send(results);
		});
	})
	/**
	 * This route patches todo's 'done' value according to the currently selected category.
	 * If every todo is marked as 'done', it turns it into 'undone'. Marks all todos as 'done' otherwise.
	 */
	.patch((req, res) => {
		let sql = req.params.category > 0 ? "UPDATE todo SET done = ? WHERE category = ?" : "UPDATE todo SET done = ?";
		db.query(sql, req.params.category > 0 ? [req.body.changeToDone, req.params.category] : [req.body.changeToDone], (err, results) => {
			if (err) throw err;
			results.message = "The todos were updated successfully.";
			res.send(results);
		});
	});

module.exports = router;
