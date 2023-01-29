const express = require('express')
import { Request, Response } from 'express'
import mongoose from "mongoose"
require('dotenv').config('/.env')

import * as userRoutes from './src/routes/userRouter'


const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())


const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE']
}
mongoose.set('strictQuery', false) //clears warning of deprecation in console.

mongoose
    .connect(String(process.env.RECIPE_APP_DB_URI))
    .then(() => {
        console.log('Connected to Recipe App Database (MongoDB)')
    })
    .catch((error) => {
        console.log(error)
    })


app.get('/login', cors(corsOptions), (req: Request, res: Response) => {
    res.send({ "message": "Successfully logged in..."})
})

app.use('/users', cors(corsOptions), userRoutes)


app.use('*', (req: Request, res: Response) => {
    res.status(404).send({"error": "not found"})
})

const port = 3000
app.listen(port, () => {
    console.log(`Backend Server listening on port ${port}`)
})


