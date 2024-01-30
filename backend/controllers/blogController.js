const Blog = require('../models/BlogsModel');
const mongoose = require('mongoose');

// 👇 this controller is ordered by 👇
// 1. Get all blogs
// 2. Get a specific blog by ID
// 3. Create a new blog
// 4. Update a blog by ID
// 5. Delete a blog by ID

// Get all blogs
const getAllBlogs = async (req,res) =>{
    try{
        const blogs = await Blog.find({}).sort({createdAT: -1})
        res.status(200).json(blogs);
    }catch (error){
        res.status(500).json({message: error.message});
    }   
};

// Get a specific blog by ID
const getBlogById = async (req,res) =>{
    const {id} = req.params
    try{
       if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'Invalid ID'})
    }
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(400).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
}catch (error){
    res.status(500).json({message: error.message});
}
};


// Create a new blog
const createBlog = async (req,res) =>{
    const {blogTitle, BlogContent,blogAuthor, BlogPic} = req.body
 let emptyFields = []
    if (!blogTitle) {
        emptyFields.push('blogTitle')
    }
    if (!BlogContent) {
        emptyFields.push('BlogContent')
    }
    if (!blogAuthor) {
        emptyFields.push('blogAuthor')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'The following fields are empty:', emptyFields })
    }

    try {
        const blog = await Blog.create({ blogTitle, BlogContent,blogAuthor, BlogPic })
        res.status(201).json(blog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

};


// Update a blog by ID

const updateBlog = async (req,res) =>{
    const {id} = req.params
    const {blogTitle, BlogContent,blogAuthor, BlogPic} = req.body

    let emptyFields = []
    if (!blogTitle) {
        emptyFields.push('blogTitle')
    }
    if (!BlogContent) {
        emptyFields.push('BlogContent')
    }
    if (!blogAuthor) {
        emptyFields.push('blogAuthor')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'The following fields are empty:', emptyFields })
    }

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: 'Invalid ID'})
    }
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(id, {blogTitle, BlogContent,blogAuthor, BlogPic}, {new: true});
        res.json(updatedBlog)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }

};

// Delete a blog by ID
const deleteBlog = async (req,res) =>{
    const {id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({error: 'Invalid ID'})
    }
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if(!deletedBlog){
         res.status(400).json({error: 'Blog not found'});
    }
    res.status(200).json({deletedBlog});
}

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};
