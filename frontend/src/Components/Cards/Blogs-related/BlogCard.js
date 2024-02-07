// BlogCard.js

import React from 'react';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom if you're using it for routing

const BlogCard = ({ blog }) => {
  const maxLength = 150; // Maximum length for the snippet

  // Function to truncate the content if it exceeds maxLength



  const truncateContent = (content) => {
    return content.length > maxLength ? `${content.substring(0, maxLength)}...` : content;
  };

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
        <p className="text-gray-600">{truncateContent(blog.blogContent)}</p>
        {blog.blogContent.length > maxLength && ( // Render "Read More" link only if content is longer than maxLength
          <Link to={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
            Read More
          </Link>
        )}
        <p className="text-gray-500 mt-2">Author: {blog.blogAuthor}</p>
      </div>
    </div>
  );
};

export default BlogCard;
