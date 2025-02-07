const express = require('express');
const path = require('path');
const cors = require('cors');
const handleRequest = require('./services/middleware/handleRequest');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const allowedOrigins = [
    "https://punjab-soft-leai8y5bs-nitishprataps-projects.vercel.app"
];
app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }))

handleRequest(app);

module.exports = app;
