"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
router.get('/users', (req, res) => {
    res.send([
        { username: "Dude" },
        { username: "Lebowski" }
    ]);
});
module.exports = router;
