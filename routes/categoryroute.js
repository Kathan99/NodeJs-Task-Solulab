const express = require('express');
const router = express.Router();
const Category = require('../models/categorymodel');

//Fetch all the data 
router.get('/readAll',(req,res)=>{
    Category.find().then((data)=>{
        res.send(data);
    });
});

//Create a Category
router.post('/create',(req,res)=>{
    
    const category = new Category({
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,
    });

    category
    .save()
    .then((data) => {
      res.send(data);
    })
});

//Fetch data by Id
router.get('/read',(req,res)=>{
    Category.findById(req.params.categoryId).then((data)=>{
        res.send(data);
    })
})


//Update Category by Id
router.put('/update',(req,res)=>{
    Category.findByIdAndUpdate(req.params.categoryId,{
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,
    })
    .then((data)=>{
        res.send(data);
    })
})

//Delete Category by Id
router.delete('/delete',(req,res)=>{
    Category.findByIdAndDelete(req.params.categoryId).then((data)=>{
        res.send(data);
    })
})

module.exports = router;