const User = require('../models/user.model');
const Order = require('../models/order.model');

exports.getAllUser = (req, res, next) => {

}
exports.postUserData = (req, res, next) => {
    var myData = new User(req.body);
    myData.save().then(item => {
        res.send("item saved to database")
    }).catch(err => {
        res.status(400).send("unable to save database");
    });
}


