// SingleBlogPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlogPage = ({ match }) => {
  const id = useParams();  
  const [blog, setBlog] = useState(null);
console.log(id);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
       const response = await fetch(`http://localhost:4000/api/blogs/${id && id.id}`);
         const data = await response.json();
            setBlog(data);

      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, []);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-1 px-4">
      <img src={blog.blogPic} alt={blog.blogTitle} className="w-full h-96 object-scale-down mb-4" />  
      <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
      <p className="text-gray-600">{blog.blogContent}</p>
      <p className="text-black text-xl mt-2 mb-4">Author: {blog.blogAuthor}</p>
    </div>
  );
};

export default SingleBlogPage;
