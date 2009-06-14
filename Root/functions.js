function main() {
    if (req.method == 'POST') {
	this.export_data();
    } else {
	return this.main_template({});
    }
};