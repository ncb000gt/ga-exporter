function clear_24h() {
    var conn = getDBConnection("_default");
    var sql = "DELETE FROM ga_24h WHERE DATEDIFF('SECOND',first_request,last_request) > 86400";
    var num = conn.executeUpdate(sql);
    if (num == -1) {
	app.log("----------------");
	app.log("clear_24h()");
	app.log("----------------");
	app.log(conn.getLastError());
	app.log("----------------");
    }
}

function clear_10s() {
    var conn = getDBConnection("_default");
    var sql = "DELETE FROM ga_10s WHERE DATEDIFF('SECOND',first_request,last_request) >  10";
    var num = conn.executeUpdate(sql);
    if (num == -1) {
	app.log("----------------");
	app.log("clear_10s()");
	app.log("----------------");
	app.log(conn.getLastError());
	app.log("----------------");
    }
}