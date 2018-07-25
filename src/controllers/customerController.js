var mongoose = require('mongoose');
var Customer = require('./../models/customerModel');

exports.addNewContact = function(req, res) {
    let newCustomer = new Customer(req.body);

    newCustomer.save((err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
};

exports.getContacts = function(req, res) {
    Customer.find({}, (err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
};

exports.getContactWithID = function(req, res) {
    Customer.findById(req.params.customerId, (err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    });
}

exports.updateContact = function(req, res) {
    Customer.findOneAndUpdate({ _id: req.params.customerId}, req.body, { new: true }, (err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json(customer);
    })
}

exports.deleteContact = function(req, res) {
    Customer.remove({ _id: req.params.customerId }, (err, customer) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted contact'});
    })
} 