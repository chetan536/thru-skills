module.exports.logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}


module.exports.notFound = (req, res, next) => {
    res.status(404).send('Not Found');
}

module.exports.handleError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send('Something went wrong');
}


module.exports.authenticate = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next()
    } else {
        res.redirect('/signin')
    }
}

module.exports.authenticated = (req,res,next) =>{
    if(req.session.isLoggedIn) {
        res.locals.user = req.session.user;
        next()
    }else {
        next();
    }
}