// BlogForm.js
import React, { useState,useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'

const BlogUpdateForm = () => {



    const [blogTitle, setBlogTitle] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [blogAuthor, setBlogAuthor] = useState("");
    const [blogPic, setBlogPic] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
  
    const [blogImageUrl, setBlogImageUrl] = useState(null);
  
    const navigate = useNavigate();
    const { id } = useParams(); // Use the useParams hook to get the eventId from the URL
    
  

    useEffect(() => {
    const fetchBlogs = async () => {
        const response = await fetch(`http://localhost:4000/api/blogs/${id}`)
        const json = await response.json()
        
         
        if (response.ok) {
            //  console.log(json)
    
            // dispatch({type:'SET_ATHLETES', payload:json})
            setBlogTitle(json.blogTitle)
            setBlogContent(json.blogContent)
            setBlogAuthor(json.blogAuthor)
            setBlogImageUrl(json.blogPic)
            setBlogPic(json.blogPic)
        }else{
            console.log("error")
        }
         }

         fetchBlogs()
        },[])


        const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dvgnpeias/upload";
        const cloudinaryPreset = "CaliArmy";


  const handleImageChange = (event, setImage, setImageUrl) => {
    const file = event.target.files[0];
    setImage(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    // Upload image to Cloudinary
    try {
      const blogImageUrl = await uploadImage(blogPic);

      // Send blog data along with the Cloudinary URL to your server
      const blogData = {
        blogTitle,
        blogContent,
        blogAuthor,
        blogPic: blogImageUrl,
      };

      const postResponse = await fetch(`http://localhost:4000/api/blogs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const json = await postResponse.json();

      if (postResponse.ok) {
        console.log("Blog was added successfully!");
        toast.success('Blog was added successfully!');
        navigate('/admin/blogsManagement');
      } else {
        setEmptyFields(json.emptyFields);
        console.log("the empty field aree", emptyFields);
        toast.error('Error adding blog!');
      }
    } catch (error) {
      console.error("Error uploading image:", error.message);
      toast.warning('Error uploading image!');
    }
  };

  const uploadImage = async (image) => {
    if (!image) return null;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", cloudinaryPreset);

    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const cloudinaryData = await response.json();
      return cloudinaryData.secure_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white p-4">
      <h1 className="text-3xl mb-6">Blog Update Form</h1>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="blogTitle" className="block text-sm font-medium text-white mb-2">
          Blog Title:
        </label>
        <input
          type="text"
          id="blogTitle"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="bg-red-500 text-white p-3 rounded w-full"
        />
        {emptyFields.includes("blogTitle") && (
          <p className="text-red-500 text-sm mt-1">Blog Title is required.</p>
        )}
      </div>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="blogContent" className="block text-sm font-medium text-white mb-2">
          Blog Content:
        </label>
        <textarea
          id="blogContent"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          rows="3"
          className="bg-red-500 text-white p-3 rounded w-full"
        ></textarea>
        {emptyFields.includes("blogContent") && (
          <p className="text-red-500 text-sm mt-1">Blog Content is required.</p>
        )}
      </div>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="blogAuthor" className="block text-sm font-medium text-white mb-2">
          Blog Author:
        </label>
        <input
          type="text"
          id="blogAuthor"
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
          className="bg-red-500 text-white p-3 rounded w-full"
        />
        {emptyFields.includes("blogAuthor") && (
          <p className="text-red-500 text-sm mt-1">Blog Author is required.</p>
        )}
      </div>

      <div className="mb-4 w-full max-w-md">
        <label htmlFor="blogPic" className="block text-sm font-medium text-white mb-2">
          Blog Picture:
        </label>
        <input
          type="file"
          id="blogPic"
          accept="image/*"
          onChange={(e) => handleImageChange(e, setBlogPic, setBlogImageUrl)}
          className="bg-red-500 text-white p-3 rounded w-full"
        />
        {blogImageUrl && (
          <img
            src={blogImageUrl}
            alt="Blog Picture"
            className="mt-4 w-full h-full object-cover"
          />
        )}
      </div>

      <button onClick={handleUpload} className="bg-red-500 text-white p-3 rounded">
        Update Blog
      </button>
    </div>
  );
};

export default BlogUpdateForm;
