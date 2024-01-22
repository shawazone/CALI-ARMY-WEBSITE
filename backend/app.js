require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.send('Wassup, fam! Express is running we are making the army website aight gang ??.');
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//     //uwu
// });

//middleware

app.use(express.json()); //this is a middleware that parses the request body as JSON
app.use((req, res, next) => {
    console.log('middleware running');
    next();
})

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
     console.log(`listening on port ${process.env.PORT} uwu`);
     console.log('connected to db')
     });   
})
.catch((err) => console.log(err));


