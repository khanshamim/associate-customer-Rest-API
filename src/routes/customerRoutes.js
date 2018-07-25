var customerController = require('./../controllers/customerController');
var express = require('express');
var customerRouter = express.Router();

customerRouter.get('/customer',(req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, customerController.getContacts)

    // POST endpoint
    customerRouter.post('/customer', customerController.addNewContact);
    
    // get specific contact
    customerRouter.get('/customer/:customerId',customerController.getContactWithID)
    
    // put request
    customerRouter.put('/customer/:customerId',customerController.updateContact)

    // delete request
    customerRouter.delete('/customer/:customerId',customerController.deleteContact);

module.exports  = customerRouter;
