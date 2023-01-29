const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST']
}

app.get('/login', cors(corsOptions), (req: any, res: any) => {
    res.send({ "message": "Successfully logged in..."})
})

app.post('/signup', cors(corsOptions), (req: any, res: any) => {
    //todo:
    //implement mongodb connection and sign user up
    res.send({ "message": `User ${req.body.email} has signed up successfully`})
})

const port = 3000
app.listen(port, () => {
    console.log(`Backend Server listening on port ${port}`)
})


//mongo cluster connection string
// mongodb+srv://learningmern:<password>@cluster0.grpsk.mongodb.net/?retryWrites=true&w=majority