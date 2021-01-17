const Product = require('../models/Products');

// @desc     get all products
// @route    GET /products
// @access   public
exports.getProducts = async(req,res,next)=>{
    try {
        const getProducts = await Product.find();
        res.status(200).json({
         success: true,
         data: getProducts});
    } catch (error) {
        res.status(400).json({success: false});
    }
    
}

// @desc     get single product
// @route    GET /product/:id
// @access   public
exports.getProduct = async(req,res,next)=>{
    try {
        const getProduct = await Product.findById(req.params.id);
        res.status(200).json({
            success: true,
            data:getProduct });
    } catch (error) {
        res.status(400).json({success: false});
    }
    
}

// @desc     create new products
// @route    POST /products
// @access   private
exports.createProducts = async(req,res,next) => {
    try {
        const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        data: product
    });
    } catch (err) {
        res.status(400).json({success: false});
    }
    
}