const express = require('express'),
      cors = require('cors');

// configuration to have environment variables in dotenv file
require('dotenv').config();

// create express server with port number
const app = express();
const port = process.env.PORT || 5000;

// middleware configuration
app.use(cors());
app.use(express.json());

// starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});