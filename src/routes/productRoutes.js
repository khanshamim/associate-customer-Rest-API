var productController = require('./../controllers/productController');
var express = require('express');
var productRouter = express.Router();

    productRouter.get('/product',(req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, productController.getProducts)

    // POST endpoint
    productRouter.post('/product', productController.addNewProduct);
    
    // get specific contact
    productRouter.get('/product/:productId',productController.getProductWithID)
    
    // put request
    productRouter.put('/product/:productId',productController.updateProduct)

    // delete request
    productRouter.delete('/product/:productId',productController.deleteProduct);

module.exports  = productRouter;
