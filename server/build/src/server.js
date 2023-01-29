"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
// import * as mongoDB from 'mongodb'
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config('/.env');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST']
};
mongoose_1.default
    .connect(String(process.env.RECIPE_APP_DB_URI))
    .then(() => {
    console.log('connected to Recipe App Database (MongoDB)');
})
    .catch((error) => {
    console.log(error);
});
app.get('/login', cors(corsOptions), (req, res) => {
    res.send({ "message": "Successfully logged in..." });
});
app.post('/signup', cors(corsOptions), (req, res) => {
    //todo:
    //implement mongodb connection and sign user up
    res.send({ "message": `User ${req.body.email} has signed up successfully` });
});
app.use('*', (req, res) => {
    res.status(404).send({ "error": "not found" });
});
const port = 3000;
app.listen(port, () => {
    console.log(`Backend Server listening on port ${port}`);
});
