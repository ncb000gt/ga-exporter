function get_entries(data) {
    var as = new Packages.com.google.gdata.client.analytics.AnalyticsService("analytics");
    as.setUserCredentials(data.username, data.password);

    //url info
    //TODO: ALLOW FOR CUSTOM DATES
    //TODO: ALLOW FOR FILTERS
    //TODO: ALLOW FOR SORTING
    var today = new Date();
    var month = new Date();
    month.setMonth(today.getMonth()-1);
    var feed_url = new Packages.java.net.URL("https://www.google.com/analytics/feeds/data?ids=ga:"+data.property+"&dimensions="+data.dimensions+"&metrics="+data.metrics+"&start-date="+month.format("yyyy-MM-dd")+"&end-date="+today.format("yyyy-MM-dd"));
    var feed = as.getFeed(feed_url, Packages.com.google.gdata.data.analytics.DataFeed);
    return feed.getEntries();
}

function convert_entries(entries, dimensions, metrics) {
    var converted_entries = [];
    var entries_size = entries.size();
    if (entries_size > 0) {
	for (var i = 0; i < entries_size; i++) {
	    var converted_entry = {
		metrics: [],
		dimensions: []
	    };
            var entry = entries.get(i);

	    for each(var met in metrics) {
		app.log('met: ' + met);
		var m = entry.getMetric(met);
		var metric = {
		    id: met,
		    name: metric_definitions[met].name,
		    value: m.getValue(),
		    confidence: m.getConfidenceInterval()
		};
		converted_entry.metrics.push(metric);
	    }

            if (entry.hasDimensions()) {
		for each (var dim in dimensions) {
		    var dimension = {
			id: dim,
			name: dimension_definitions[dim].name,
			value: entry.getDimension(dim).getValue()
		    };
		    converted_entry.dimensions.push(dimension);
		}
	    }
	    converted_entries.push(converted_entry);
	}
    }
    return converted_entries;
}

function get_dimensions(dims) {
    return dims.map(
	function(dim) {
	    return dimension_definitions[dim];
	}
    );
}

function get_metrics(mets) {
    return mets.map(
	function(met) {
	    return metrics_definitions[met];
	}
    );
}