function init() {
    create_dbs();
}

function create_dbs() {
    var conn = getDBConnection("_default");
    var sql_24h = "CREATE TABLE IF NOT EXISTS ga_24h (id INT NOT NULL AUTO_INCREMENT, profile VARCHAR(50) NOT NULL, count INT NOT NULL, first_request TIMESTAMP NOT NULL, last_request TIMESTAMP NOT NULL);";
    if (conn.executeUpdate(sql_24h) == -1) {
	app.log("----------------");
	app.log("create_dbs() - 24h");
	app.log("----------------");
	app.log(conn.getLastError());
	app.log("----------------");
    }

    var sql_10s = "CREATE TABLE IF NOT EXISTS ga_10s (id INT NOT NULL AUTO_INCREMENT, profile VARCHAR(50) NOT NULL, count INT NOT NULL, first_request TIMESTAMP NOT NULL, last_request TIMESTAMP NOT NULL);";
    if (conn.executeUpdate(sql_10s) == -1) {
	app.log("----------------");
	app.log("create_dbs() - 10s");
	app.log("----------------");
	app.log(conn.getLastError());
	app.log("----------------");
    }
}