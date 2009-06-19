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
	app.log("dims: " + submit_data.dimensions);
	app.log("mets: " + submit_data.metrics);

	var entries = get_entries(submit_data);
	var entries_json = convert_entries(entries, split_dimensions, split_metrics);
	app.log(entries_json.toSource());


	global['to_'+format](entries_json, split_dimensions, split_metrics);

	data.success = "All fields properly filled out.";
    } else {
	data.failure = "Not all required fields were filled out.";
    }

    return data;
};