module.exports = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3001");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}