const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/Product');

router.get('/', async (req, res, next) =>  {
    try {
        const products = await Product.find();
        // send retrieved products data as a json format
        res.json(products);
    } catch (error) {
        // send err to middleware
        next(error); 
    }
})

// get single product by id
router.get('/:id', async (req, res, next) => {
    try {
        const post = await Product.findById(req.params.id);
        res.json(post);
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        // receive data from request body and save to db
        const post = await Product.create(req.body);
        // send saved data back to client as a json response
        res.json(post);
    } catch (error) {
        next(error);
    }
})

// update product by id
router.put('/:id', async (req, res, next) => {
    try {
        const post = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.json(post);
    } catch (error) {
        next(error);
    }
})

// delete product by id
router.delete('/:id', async (req, res, next) => {
    try {
        const post = await Product.findByIdAndDelete(req.params.id);
    } catch (error) {
        next(error);
    }
})

module.exports = router;