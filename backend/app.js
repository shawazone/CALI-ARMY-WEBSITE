require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Wassup, fam! Express is running we are making the army website aight gang ??.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    //uwu
});
