function to_xml(data) {
    res.contentType = "text/xml";
    res.getServletResponse().setHeader("Content-Disposition", "attachment; filename=gaexport-" + new Date().format("yyyyMMddHHmmss") + ".xml");
    res.write('<?xml version="1.0"?>\n');
    var results = <><results></results></>;

    for each (var result in data) {
	var r = <><result>
	</result></>;

	var dimensions = <><dimensions>
	    </dimensions></>;
	for each (var dim in result.dimensions) {
	    var dimension = <dimension>
		<name>{dim.name}</name>
		<value>{dim.value}</value>
		</dimension>;
	    dimensions.dimensions += dimension;
	}
	r.results += dimensions;

	var metrics = <><metrics>
	    </metrics></>;
	for each (var met in result.metrics) {
	    var metric = <metric>
		<name>{met.name}</name>
		<value>{met.value}</value>
		<confidence>{met.confidence}</confidence>
		</metric>;
	    metrics.metrics += metric;
	}
	r.results += metrics;

	results.results += r;
    }

    var res_str = results.toXMLString();
    res.write(res_str);
}
