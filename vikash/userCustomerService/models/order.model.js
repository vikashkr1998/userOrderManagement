const User = require('./user.model');
const { Mongoose, now } = require("mongoose");

const schema = Mongoose.schema;

const UserCollectionScheama = new schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subtotal: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: now.Date

    }
})

module.exports = mongoose.model('UserCollection', UserCollectionScheama);
