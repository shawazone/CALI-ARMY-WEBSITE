// BlogManagementPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogMangementCard from '../../../Components/Cards/Blogs-related/BlogMangementCard';
// import { useBlogsContext } from '../../../hooks/useBlogsContext';


const BlogManagementPage = () => {
//   const { blogs, dispatch } = useBlogsContext();
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/blogs/');
        const json = await response.json();

        if (response.ok) {
        //   dispatch({ type: 'SET_BLOGS', payload: json });
            setBlogs(json);
        } else {
          console.error('Error fetching blogs:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex justify-center items-start mt-4 mb-14 w-full lg:w-2/3 xl:w-1/2 mx-auto">
        <Link to="/admin/blogsManagement/newBlog">
          <button className="bg-red-500 text-white p-2 rounded px-8 md:px-12 lg:px-16 xl:px-20 hover:bg-black">
            Add a new blog
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center">
        {blogs && Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogMangementCard key={blog.id} blog={blog} />
          ))
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </>
  );
};

export default BlogManagementPage;
