const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const productRoute = require('./routes/productroute');
const categoryRoute = require('./routes/categoryroute');
require('dotenv/config'); // For Authenticaion

app.use(bodyparser.json());
app.use('/product',productRoute);
app.use('/category',categoryRoute);


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Connected to DB'));
app.listen(3000);