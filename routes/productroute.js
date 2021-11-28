const express = require('express');
const router = express.Router();
const Product = require('../models/productmodel');

//Fetch all data
router.get('/readAll',(req,res)=>{
    Product.find().then((data)=>{
        res.send(data);
    });
});

//Create Product
router.post('/create',(req,res)=>{
    
    const product = new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId,
    });

    product
    .save()
    .then((data) => {
      res.send(data);
    })
});


//Fetch Data by Id
router.get('/read',(req,res)=>{
    Product.findById(req.params.productId).then((data)=>{
        res.send(data);
    })
})


//Update data by ID
router.put('/update',(req,res)=>{
    Product.findByIdAndUpdate(req.params.productId,{
        productId: req.body.productId,
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId,
    })
    .then((data)=>{
        res.send(data);
    })
})

//Delete data by Id
router.delete('/delete',(req,res)=>{
    Product.findByIdAndDelete(req.params.productId).then((data)=>{
        res.send(data);
    })
})

module.exports = router;