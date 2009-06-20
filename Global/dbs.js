function get_count_24h(profile) {
    return get_count("ga_24h", profile);
}

function get_count_10s(profile) {
    return get_count("ga_10s", profile);
}

function get_count(db, profile) {
    var conn = getDBConnection("_default");
    var sql_exists = "SELECT count FROM "+db+" WHERE profile = '"+profile+"'";
    var count = 0;
    var rows = conn.executeQuery(sql_exists);
    rows.next();
    while (rows.hasMoreRows()) {
	count = rows.getColumnItem('count');
	rows.next();
    }

    count = parseInt(count, 10);
    if (isNaN(count)) {
	return 0;
    }

    return count;
}

function update_db_24h(profile, count) {
    return update_db("ga_24h", profile, count);
}

function update_db_10s(profile, count) {
    return update_db("ga_10s", profile, count);
}

function update_db(db, profile, count) {
    var conn = getDBConnection("_default");
    count++;

    var sql = null;
    var time = new Date();
    time = time.format("yyyy-MM-dd hh:mm:ss");
    if (count == 1) {
	sql = "INSERT INTO "+db+" (profile, count, first_request, last_request) values('"+profile+"', "+count+", '"+time+"','"+time+"');";
    } else {
	sql = "UPDATE "+db+" SET first_request = '"+time+"' WHERE profile = '"+profile+"'";
    }
    var num = conn.executeUpdate(sql);
    if (num == -1) {
	app.log('------------');
	app.log('update_db()');
	app.log('------------');
	app.log(conn.getLastError());
	app.log("SQL: " + sql);
	app.log('------------');
	return false;
    }

    return true;
}