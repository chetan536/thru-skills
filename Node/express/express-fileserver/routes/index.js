const fs = require('fs');
const path = require('path');


module.exports.index = (req, res, next) => {
    fs.readFile(path.join(__dirname, '../views/index.html'), (err, data) => {
        if (err) {
            next(err)
        } else {
            res.write(data);
            res.end();
        }
    })
}


module.exports.contact = (req, res, next) => {
    fs.readFile(path.join(__dirname, '../views/contact.html'), (err, data) => {
        if (err) {
            next(err)
        } else {
            res.write(data);
            res.end();
        }
    })
}

module.exports.doContact = (req, res, next) => {
    let body = req.body;
    console.log('Contact Data', body)
    fs.readFile(path.join(__dirname, '../views/doContact.html'), (err, data) => {
        if (err) {
            next(err)
        } else {
            res.write(data);
            res.end();
        }
    })
}