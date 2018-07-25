var mongoose = require('mongoose');
var Product = require('./../models/productModel');

exports.addNewProduct = function(req, res) {
        let newProduct = new Product(req.body);
   /* var newProduct = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Jamie',
            lastName: 'Munro'
        },
        price: 1000,
        instock:true,
        photo:'test'
    });*/

    newProduct.save((err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

exports.getProducts = function(req, res) {
    Product.find({}, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
};

exports.getProductWithID = function(req, res) {
    Product.findById(req.params.productId, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    });
}

exports.updateProduct = function(req, res) {
    Product.findOneAndUpdate({ _id: req.params.productId}, req.body, { new: true }, (err, product) => {
        if (err) {
            res.send(err);
        }
        res.json(product);
    })
}

exports.deleteProduct = function(req, res) {
    Product.remove({ _id: req.params.productId }, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
} 