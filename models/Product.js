const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prod_name: String,
    prod_desc: String,
    prod_price: Number,
    updated_at: { type: Date, default: Date.now },
});

// model and collection name 'Product' and pass data ProductSchema
module.exports = mongoose.model('Product', ProductSchema);
