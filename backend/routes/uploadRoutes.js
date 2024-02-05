// this file is used to upload images to cloudinary and return the url of the image to the frontend for storage in the database 

const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary (replace with your actual credentials)


//❌❌ this field needs to be hidden in a .env file
cloudinary.config({
    cloud_name: 'dvgnpeias',
    api_key: '355913129594637',
    api_secret: 'hW1q1xISFtAX05lZA7HAsjgI2vY',
  });
//❌❌👆👆  



// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Define the upload endpoint
router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        // Clean up the temporary file (optional)
        // fs.unlinkSync(req.file.path);
        res.json({ url: result.secure_url });
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
