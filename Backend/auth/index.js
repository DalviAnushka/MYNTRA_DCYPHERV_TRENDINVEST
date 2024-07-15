const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

// Connect to DB using the promise-based approach
mongoose.connect(process.env.DB_CONNECT,
     {
    useNewUrlParser: true, 
})
    .then(() => {
        console.log('Connected to DB!');
        
        // Start your server here after a successful connection
        app.listen(3000, () => console.log('Server Up and running'));
    })
    .catch((err) => {
        console.error('Error connecting to DB:', err);
    });

// Middleware to parse JSON request bodies
app.use(express.json());

// Router Middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

