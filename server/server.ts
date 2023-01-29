const express = require('express')
require('dotenv').config('/.env')

import { NextFunction, Request, Response } from 'express'
import http from 'http'
import mongoose from "mongoose"
import { router as userRouter }from './src/routes/userRouter' //?????????


const app = express()

/** MONGODB CONNECTION **/
mongoose.set('strictQuery', false) //clears warning of deprecation in console.
mongoose
    .connect(String(process.env.RECIPE_APP_DB_URI))
    .then(() => {
        console.log('Connected to Recipe App Database (MongoDB)')
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB')
        console.log(error)
})


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/** CORS RULES **/
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if(req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
        return res.status(200).json({})
    }
    next()
})


/**  ROUTES **/
app.get('/login', (req: Request, res: Response) => {
    res.send({ "message": "Successfully logged in..."})
})

app.use('/user', userRouter) //causing type error 

app.use('*', (req: Request, res: Response) => {
    res.status(404).send({"error": "not found"})
})


/** ERROR HANDLEING FOR ROUTES **/
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found')

    res.status(404).json({ message: error.message })
})


// SERVER START LISTENING
const port = 3000
http.createServer(app).listen(port, () => {
    console.log(`Backend Server listening on port ${port}`)
})
    



