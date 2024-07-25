require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const cloudinary = require('cloudinary').v2;



const athleteRouter = require('./routes/athleteRoutes');
const productRouter = require('./routes/productRoutes');
const eventRouter = require('./routes/eventRoutes');
const blogRouter = require('./routes/blogRoutes');

const LoginRouter = require('./routes/loginRoutes');
const RegisterRouter = require('./routes/RegisterRoutes');
const ProtectedRouter = require('./routes/ProtectedRoutes');

const userRouter = require('./routes/userRoutes');
const uploadRouter = require('./routes/uploadRoutes');//upload route for cloudinary 


const cors = require('cors');
const app = express();
const port = process.env.PORT;



// Enable CORS for all routes
app.use(cors());



//middleware
app.use(express.json()); //this is a middleware that parses the request body as JSON
app.use((req, res, next) => {
    console.log('middleware running');
    next();
})

//routes  
// it is required to have a /api/ in front of the route


app.get('/', (req, res) => {
    res.send('Wassup, fam! Express is running we are making the army website aight  ??.');
});


// app.use('/api/athletes', athleteRouter);
app.use('/api',  athleteRouter);
app.use('/api',  productRouter);
app.use('/api',  eventRouter);
app.use('/api', uploadRouter);
app.use('/api', blogRouter);
app.use('/api', LoginRouter);
app.use('/api', RegisterRouter);
app.use('/api', ProtectedRouter);
app.use('/api/user', userRouter);


// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
     console.log(`listening on port ${process.env.PORT} uwu`);
     console.log('connected to db')
     });   
})
.catch((err) => console.log(err));









// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//     //uwu
// });