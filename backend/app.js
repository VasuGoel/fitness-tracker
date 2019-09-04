const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose');

// configuration to have environment variables in dotenv file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware config
app.use(cors());
app.use(express.json());

// mongodb config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully.')
});

// starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});