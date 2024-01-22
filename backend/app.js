require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const athleteRouter = require('./routes/athleteRoutes');
 
const app = express();
const port = process.env.PORT;


//middleware
app.use(express.json()); //this is a middleware that parses the request body as JSON
app.use((req, res, next) => {
    console.log('middleware running');
    next();
})

//routes  
// it is required to have a /api/ in front of the route


app.get('/', (req, res) => {
    res.send('Wassup, fam! Express is running we are making the army website aight gang ??.');
});


// app.use('/api/athletes', athleteRouter);
app.use('/api',  athleteRouter);



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