function to_json(data) {
    res.contentType = "application/json";
    res.getServletResponse().setHeader("Content-Disposition", "attachment; filename=gaexport-" + new Date().format("yyyyMMddHHmmss") + ".json");
    res.write(data.toSource());
}