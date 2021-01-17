const express = require('express');
const dotenv = require('dotenv');
//Route files
const amazekartRoute = require('./routes/amazekart.js')
const connectDB = require('./config/db');
//const colors = require('colors');
// load env vars
dotenv.config({path: './config/config.env'});

//connect to database
connectDB();


const app = express();

//body parser
app.use(express.json());


//app.use(logger);
// Mount routers
app.use('/products',amazekartRoute);

const PORT = process.env.PORT || 4021;

const server = app.listen(PORT, () => {
    console.log(`server running in on port ${PORT}`);
});

//Handle unhendled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    server.close(() => process.exit(1));
});