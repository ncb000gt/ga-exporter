function main() {
    var message = null;
    if (req.method == 'POST') {
	message = this.export_data();
	if (message.success) {
	    return;
	}
    }

    return this.main_template({message: message});
};

function export_data() {
    var data = {info: null, failure: null, success: null};

    if (app.getProperty('debug') == 'true') {
	data.info = req.data.toSource();
    }

    var username = req.get('username');
    var password = req.get('password');
    var property = req.get('property');
    var format = req.get('format');
    var dimensions = req.get('raw_dimensions');
    var metrics = req.get('raw_metrics');

    if (username && password && property && format && dimensions && metrics) {
	var count_24h = get_count_24h(property);
	if (count_24h < 10000) {
	    var count_10s = get_count_10s(property);
	    if (count_10s < 100) {
		var split_dimensions = dimensions.split(',');
		var split_metrics = metrics.split(',');
		var submit_data = {
		    username: username,
		    password: password,
		    property: property,
		    format: format,
		    dimensions: dimensions,
		    metrics: metrics
		};
		var success = false;
		try {
		    var entries = get_entries(submit_data);
		    if (update_db_24h(property, count_24h) && update_db_10s(property, count_10s)) {
			var entries_json = convert_entries(entries, split_dimensions, split_metrics);

			global['to_'+format](entries_json, split_dimensions, split_metrics);
			success = true;
		    }
		} catch (e) {
		    if (e.message.indexOf('InvalidCredentialsException') >= 0) {
			data.failure = "Username and/or password were incorrect. Please re-enter and try again.";
		    } else if (e.message.indexOf('InvalidEntryException') >= 0) {
			//TODO: EMAIL serverAdmin WHEN THIS HAPPENS (SHOULD BE INFREQUENT)
			app.log('Dimensions: ' + split_dimensions.toSource());
			app.log('Metrics: ' + split_metrics.toSource());
			data.failure = "Illegal combination of dimensions and metrics. Please contact " + app.getProperty('serverAdmin') + " and inform.";
		    }

		    app.log(e);
		    success = false;
		} finally {
		    if (success) {
			data.success = "All fields properly filled out.";
		    } else {
			if (!(data.failure)) {
    			    data.failure = "There was an error with the server. Please contact the administrator: " + app.getProperty('serverAdmin');
			}
		    }
		}
	    } else {
		data.failure = "You've maxxed your number of queries ("+count_10s+") for 10 seconds.";
	    }
	} else {
	    data.failure = "You've maxxed your number of queries ("+count_24h+") for 24 hours.";
	}
    } else {
	data.failure = "Not all required fields were filled out.";
    }

    return data;
};