function main() {
    var message = null;
    if (req.method == 'POST') {
	message = this.export_data();
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
    var dimensions = req.get('dimensions');
    var metrics = req.get('metrics');

    if (username && password && property && format && dimensions && metrics) {
	var submit_data = {
		username: username,
		password: password,
		property: property,
		format: format,
		dimensions: get_dimensions(dimensions.split(',')),
		metrics: get_metrics(metrics.split(','))
	};
	app.log("dims: " + submit_data.dimensions);
	app.log("mets: " + submit_data.metrics);

	var entries = get_entries(submit_data);
	var entries_json = convert_entries(entries, submit_data);
	app.log(entries_json.toSource());
	data.success = "All fields properly filled out.";
    } else {
	data.failure = "Not all required fields were filled out.";
    }

    return data;
};