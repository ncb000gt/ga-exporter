function get_entries(data) {
    var as = new Packages.com.google.gdata.client.analytics.AnalyticsService("analytics");
    as.setUserCredentials(data.username, data.password);

    var dimensions = data.dimensions.join(',');
    var metrics = data.metrics.join(',');

    //url info
    //TODO: ALLOW FOR CUSTOM DATES
    var today = new Date();
    var month = new Date();
    month.setMonth(today.getMonth()-1);
    var feed_url = new Packages.java.net.URL("https://www.google.com/analytics/feeds/data?ids=ga:"+data.property+"&dimensions="+dimensions+"&metrics="+metrics+"&start-date="+month.format("yyyy-MM-dd")+"&end-date="+today.format("yyyy-MM-dd"));
    var feed = as.getFeed(feed_url, Packages.com.google.gdata.data.analytics.DataFeed);
    return feed.getEntries();
}

function convert_entries(entries, data) {
    var converted_entries = [];
   var entries_size = entries.size();
    if (entries_size > 0) {
	for (var i = 0; i < entries_size; i++) {
	    var converted_entry = {
		metrics: {},
		dimensions: {}
	    };
            var entry = entries.get(i);
	    for each(var met in data.metrics) {
		converted_entry.metrics[met.replace(/ga\:/, '')] = entry.doubleValueOf(met);
	    }

            if (entry.hasDimensions()) {
		for each (var dim in data.dimensions) {
		    app.log('dim: '+dim);
		    converted_entry.dimensions[dim.replace(/ga\:/, '')] = entry.getDimension(dim).getValue();
		}
	    }
	    converted_entries.push(converted_entry);
	}
    }
    return converted_entries;
}

function get_dimensions(dims) {
    var dimension_definitions = {
	"Browser": 'browser',
	"Browser Version": 'browserVersion',
	"City": 'city',
	"Connection Speed": 'connectionSpeed',
	"Continent": 'continent',
	"Count of Visits": 'countOfVisits',
	"Country": 'country',
	'Date': 'date',
	'Day': 'day',
	'Days Since Last Visit': 'daysSinceLastVisit',
	'Flash Version': 'flashVersion',
	'Hostname': 'hostname',
	'Hour': 'hour',
	'Java Enabled': 'javaEnabled',
	'Language': 'language',
	'Latitude': 'latitude',
	'Longitude': 'longitude',
	'Month': 'month',
	'Network Domain': 'networkDomain',
	'Network Location': 'networkLocation',
	'Page Depth': 'pageDept',
	'Operating System': 'operatingSystem',
	'Operating System Version': 'operatingSystemVersion',
	'Region': 'region',
	'Screen Colors': 'screenColors',
	'Screen Resolution': 'screenResolution',
	'Sub Continent': 'subContinent',
	'User Defined Variable': 'userDefinedVariable',
	'Visitor Type': 'visitorType',
	'Week': 'week',
	'Year': 'year'
    };

    return dims.map(
	function(dim) {
	    return ('ga:'+dimension_definitions[dim]);
	}
    );
}

function get_metrics(mets) {
    var metrics_definitions = {
	'Bounces': 'bounces',
	'Entrances': 'entrances',
	'Landing Page Path': 'landingPagePath',
	'Exits': 'exits',
	'Exit Page Path': 'exitPagePath',
	'New Visits': 'newVisits',
	'Pageviews': 'pageviews',
	'Page Path': 'pagePath',
	'Time On Page': 'timeOnPage',
	'Time On Site': 'timeOnSite',
	'Visitors': 'visitors',
	'Visits': 'visits'
    };

    return mets.map(
	function(met) {
	    return ('ga:'+metrics_definitions[met]);
	}
    );
}