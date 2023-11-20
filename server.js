require('dotenv').config();

const request = require('./lib/request');
const env = require('./lib/env')
const express = require('express');
const app = express();

const port = process.env.PORT || env.defaultPort;

// Middleware showing URL called in env dev
if (env.is('dev')) {
    app.use(function (req, res, next) {
        console.log('Go to:', request.fullUrl(req, port));
        next();
    });
}

// First route
app.get('/', (req, res) => {
    res.send({
        'apiVersion': process.env.API_VERSION || '1.0.0'
    });
});

// Second route
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

// Start server with defined port
app.listen(port, (error) => {
    if (! error) {
        console.log(`Server listening on port ${port}`);
    } else {
        console.log('Error server listening:', error);
    }
});