var mysql = require('mysql');
var db;
var settings = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "telephonebookdb",
}

function conectdatabase() {
    if (!db) {
        db = mysql.createConnection(settings);
        db.connect(function (err) {
            if (!err) {
                console.log("Data Base Connected");
            } else {
                console.log("Error");
            }
        });
    }
    return db;
}

module.exports = conectdatabase();
