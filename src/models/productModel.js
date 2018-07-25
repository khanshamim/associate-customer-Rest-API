var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    price: {
        type:Number,
        required:'Enter product price'
    },
    instock:{
        type:Boolean
    },
    photo: {
      type: String
    },
    created: { 
        type: Date,
        default: Date.now
    }
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;

