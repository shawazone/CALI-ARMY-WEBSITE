const Product = require('../models/ProductsModel');
const mongoose = require('mongoose');

// 👇 this controller is ordered by 👇
// 1. Get all products
// 2. Get a specific product by ID
// 3. Create a new product
// 4. Update a product by ID
// 5. Delete a product by ID



// Get all products
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({}).sort({createdAt: -1}); //sorts by most recent
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific product by ID
const getProdictById = async (req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({error: 'Invalid ID'})
        }
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({message: 'Product not found'});
        }
        res.status(200).json(product);
    }catch (error){
        res.status(500).json({message: error.message});
    }
        
    };


// Create a new product

const createProduct = async (req, res) => {
    const {name, description,price,quantity,  image} = req.body

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }

    if(!description){
        emptyFields.push('description')
    }

    if(!price){
        emptyFields.push('price')
    }

    if(!quantity){
        emptyFields.push('quantity')
    }

    // if(!image){
    //     emptyFields.push('image')
    // }

    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'please fill in the following fields', emptyFields})
     }

     try{
        const product = await Product.create({name,description,price,quantity,image})
        res.status(201).json(product)
     }
        catch(error){
            res.status(500).json({message: error.message});
        }

}




// Update a product by ID
const updateProductById = async (req, res) => {
    const {id} = req.params
    const {name,description,price,quantity,image} = req.body

    

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }

    if(!description){
        emptyFields.push('description')
    }

    if(!price){
        emptyFields.push('price')
    }

    if(!quantity){
        emptyFields.push('quantity')
    }

    if(!image){
        emptyFields.push('image')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'please fill in the following fields', emtyFields})
     }



    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({error: 'Invalid ID'})
        }
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({message: 'Product not found'});
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, description,price,quantity,  image}, {new: true});
        res.status(200).json(updatedProduct);
    }catch (error){
        res.status(500).json({message: error.message});
    }
        
    };


// Delete a product by ID

const deleteProductById = async (req, res) => {
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400).json({error: 'Invalid ID'})
        }
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({message: 'Product not found'});
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({message: 'Product deleted successfully'});
    }catch (error){
        res.status(500).json({message: error.message});
    }
        
    };


    module.exports = {
        getAllProducts,
        getProdictById,
        createProduct,
        updateProductById,
        deleteProductById
    }