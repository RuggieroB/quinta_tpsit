const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3');


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use( bodyParser.urlencoded({ extended: false }) );

let db = new sqlite3.Database('todos.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the todos database.');
	app.listen(3000);
});

app.get('/', function (req, res) {
	const sql = "SELECT * FROM Todos;";
	db.all(sql, (err, rows) => {
		if (err) {
			throw err;
		}
		res.render('index', {
			todos: rows
		});
	});
});

app.use(function (req, res) {
	res.sendFile(
		path.join(__dirname, 'public', '404.html')
	);
});

