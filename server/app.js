const express = require('express');
const path = require('path');
const cors = require('cors');
const handleRequest = require('./services/middleware/handleRequest');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
handleRequest(app);

module.exports = app;
