function to_csv(data, dimensions, metrics) {
    var titles = ["Dimensions"];
    var subtitles = [''];
    for each (var dim in dimensions) {
	titles.push('');
	subtitles.push(dimension_definitions[dim].name);
    }
    titles.push("Metrics");
    subtitles.push('');

    for each (var met in metrics) {
	subtitles.push(metric_definitions[met].name);
	subtitles.push(metric_definitions[met].name + ": Confidence Interval");
    }

    res.contentType = "application/vnd.ms-excel";
    res.getServletResponse().setHeader("Content-Disposition", "attachment; filename=gaexport-" + new Date().format("yyyyMMddHHmmss") + ".csv");
    res.write(titles.join(',') + "\n");
    res.write(subtitles.join(',') + "\n");
    write_csv_lines(data);
}

function write_csv_lines(data) {
    for each (var result in data) {
	var cols = ['']; //one space for dimensions title
	for each (var dim in result.dimensions) {
	    cols.push(csv_escape(dim.value));
	}
	cols.push(''); //one space for metrics title
	for each (var met in result.metrics) {
	    cols.push(csv_escape(met.value));
	    cols.push(csv_escape(met.confidence));
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