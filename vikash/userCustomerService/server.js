const express = require('express');

const mongoose = require('mongoose');

const app = express();

const userRoute = require('./routes/user.route');
app.use(userRoute);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect('mongodb+srv://user1:vikash123@employee.j0gzk.mongodb.net/userorder?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    app.listen(7700)
    console.log('mongoose connected');

}).catch((err) => {
    console.log('mongoose not connected');
    console.log(err);
});
