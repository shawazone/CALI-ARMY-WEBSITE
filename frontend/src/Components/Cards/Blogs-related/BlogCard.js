// BlogCard.js

import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-4 w-full max-w-3xl transform transition-transform hover:scale-105">
      {blog.blogPic && (
        <img
          src={blog.blogPic}
          alt={blog.blogTitle}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{blog.blogTitle}</h2>
        <p className="text-gray-600">{blog.blogContent}</p>
        <p className="text-gray-500 mt-2">Author: {blog.blogAuthor}</p>
      </div>
    </div>
  );
};

export default BlogCard;