var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    address: {
        type:String
    },
    dob: {
        type:Date,
        default:Date.now
    },
    gender: {
        type:String
    }, 
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

var Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer