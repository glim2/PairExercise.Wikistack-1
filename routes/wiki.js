const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');

// get /wiki
router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/')
});

// post /wiki
router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/')
});

// get /wiki/add
router.get('/add', (req, res, next) => {
    res.send(addPage())
});

module.exports = router;