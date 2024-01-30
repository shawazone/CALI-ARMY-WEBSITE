const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String,
        required: true,

    },
    
    BlogContent: {
        type: String,
        required: true,
    },

    blogAuthor : {
        type: String,
        required: true,
    },


    BlogPic: {
        type: String,
        // required: true,
    },
    
},{timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;