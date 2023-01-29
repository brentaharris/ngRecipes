const express = require('express')
import { Request, Response } from 'express'
import * as mongoDB from 'mongodb'
// import * as Mongoose from "mongoose";
require('dotenv').config('/.env')


const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())


const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST']
}



//?? wtf is going on??
const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.RECIPE_APP_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })




app.get('/login', cors(corsOptions), (req: Request, res: Response) => {
    res.send({ "message": "Successfully logged in..."})
})

app.post('/signup', cors(corsOptions), (req: any, res: any) => {
    //todo:
    //implement mongodb connection and sign user up
    res.send({ "message": `User ${req.body.email} has signed up successfully`})
})

app.use('*', (req: Request, res: Response) => {
    res.status(404).send({"error": "not found"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Backend Server listening on port ${port}`)
})


