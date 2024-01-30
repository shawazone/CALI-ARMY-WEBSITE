// BlogCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBlogsContext } from '../../../hooks/useBlogsContext';

const BlogMangementCard = ({ blog }) => {

    const { dispatch } = useBlogsContext();

    const deleteBlog = async (id) => {
        try {
          const response = await fetch(`http://localhost:4000/api/blogs/${id}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            dispatch({ type: "DELETE_BLOGS", payload: blog });
            console.log("Blog was deleted successfully!");
            toast.success('Blog was deleted successfully!');
          } else {
            console.error("Error deleting blog:", response.statusText);
          }
        } catch (error) {
          console.error("Error deleting blog:", error.message);
        }
      }
      console.log(blog);
  return (
    <> 
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-4 mb-4 w-full max-w-3xl transform transition-transform hover:scale-105">
    <div className="flex justify-end space-x-2 mt-4 mx-4">
        <Link to={`/admin/blogsManagement/${blog._id}`}>
          <button className="bg-blue-500 text-white p-2 rounded">
           Update
          </button>
            </Link>
          <button onClick={() => deleteBlog(blog._id)} className="bg-red-500 text-white p-2 rounded">
            Delete
          </button>
        </div>
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
</>
  );
};

export default BlogMangementCard;