const mongoose = require("mongoose");
const { stringify } = require("querystring");

const schema = mongoose.Schema;

const UserCollectionSchema = new schema({
    userId: {
        type: Number,
        required: true,
        unique: true/*.then(item=>{
            console.log('valid input');
        }).catch(err=>{
            res.status(200).send('userId already exist')
        })*/
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UserCollection', UserCollectionSchema);
