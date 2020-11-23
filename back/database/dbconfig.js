//Database configuration for setup and connection

const { createDb, connectToDb, createTables } = require("./dbSetup");
const { response } = require("express");
const mysql = require("mysql");

//Connects to mysql using the provided credentials
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "ovocompao",
	port: 8889,
});

console.log("Checking on database configurations...");
createDb();
connectToDb();
createTables();

module.exports = db;
