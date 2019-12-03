module.exports.logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
}


module.exports.notFound = function (req, res, next) {
    res.status(404).send('Not Found');
}

module.exports.errorHandler = function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Something Went Wrong');
}