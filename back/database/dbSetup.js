module.exports = {
	//Creates a database for the todos if it doesn't exist
	createDb: function () {
		let sql = "CREATE DATABASE IF NOT EXISTS todos";

		db.query(sql, (err, results) => {
			if (err) throw err;
		});
	},

	//Connects to the todos database after certifying it exists
	connectToDb: function () {
		db.changeUser({ database: "todos" }, function (err) {
			if (err) throw err;
			console.log("MySQL conected to 'todos' database...");
		});
	},

	//Setup the tables used on the application, along with the necessary category '0'
	createTables: function () {
		let sql = `CREATE TABLE IF NOT EXISTS category (
		id smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT,
		name varchar(80) NOT NULL,
		PRIMARY KEY (id)
		)ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

		db.query(sql, (err, results) => {
			if (err) throw err;
		});

		let slq2 = `CREATE TABLE IF NOT EXISTS todo (
		id int(11) NOT NULL AUTO_INCREMENT,
		name varchar(150) NOT NULL,
		category smallint(6) UNSIGNED NOT NULL DEFAULT '0',
		done tinyint(1) NOT NULL DEFAULT '0',
		PRIMARY KEY (id),
		FOREIGN KEY (category) REFERENCES category (id) ON DELETE CASCADE ON UPDATE CASCADE
	  ) ENGINE=InnoDB DEFAULT CHARSET=utf8; `;

		db.query(slq2, (err, results) => {
			if (err) throw err;
		});

		let sql3 = `SELECT * FROM category WHERE id = 0`;

		db.query(sql3, (err, results) => {
			if (err) throw err;

			if (!results[0]) {
				let sql4 = `INSERT INTO category (name) VALUES ('All Todos');`;
				db.query(sql4, (err, results) => {
					if (err) throw err;

					let sql5 = `UPDATE category SET id = 0 WHERE name = 'All Todos'`;
					db.query(sql5, (err, results) => {
						if (err) throw err;
						console.log("Inserted 'All todos' category successfully...");
					});
				});
			} else console.log("'All todos' category verified...");
		});
	},
};
