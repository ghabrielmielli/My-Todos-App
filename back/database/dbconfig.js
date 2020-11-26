//Database configuration for setup and connection

const { createDb, connectToDb, createTables } = require("./dbSetup");
const { response } = require("express");
const mysql = require("mysql");

//Connects to mysql using the provided credentials
const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
});

console.log("Checking on database configurations...");
createDb(db);
connectToDb(db);
createTables(db);

module.exports = db;
