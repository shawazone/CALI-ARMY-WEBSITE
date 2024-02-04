// BlogsPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from '../../Components/Cards/Blogs-related/BlogCard';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex justify-center mt-10 mx-3">
      <div className="flex flex-col items-center w-full max-w-4xl">
        {blogs.length === 0 ? (
          <p className="text-xl font-bold">fetching blogs.</p>
        ) : (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        )}
      </div>
    </div>
  );
};

export default BlogsPage;
