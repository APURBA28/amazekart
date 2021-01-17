const express = require('express');
const 
{ 
    getProducts, 
    getProduct, 
    createProducts
}   = require('../controller/amazekartController');

const router = express.Router();

router
.route('/')
.get(getProducts)
.post(createProducts);

router
.route('/:id')
.get(getProduct)

module.exports = router;