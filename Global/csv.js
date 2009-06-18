function to_csv(data) {
    res.contentType = "application/vnd.ms-excel";
    res.getServletResponse().setHeader("Content-Disposition", "attachment; filename=gaexport-" + new Date().format("yyyyMMddHHmmss") + ".csv");
    res.write("Dimensions," + titles.join(",") + ",Metrics," + metrics.join(',') "\n");
    write_csv_lines(users);
}

function write_csv_lines(fields, rows) {
    for each (var row in rows) {
	var cols = [];
	for each (var field in fields) {
	    cols.push(csv_escape(row[field]));
	}
	res.write(cols.join(",") + "\n");
    }
}

function csv_escape(s) {
    if (!s) { return ''; }
    else { s+=''; }
    s = s.trim();
    s = s.replace(/\"/, "\"\"");
    if (s.indexOf(",") > -1 || s.indexOf("\r") > -1 || s.indexOf("\n") > -1) {
        s = ["", s, ""].join("\"");
    }
    return s;
}