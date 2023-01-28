const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const corsOptions = {
    origin: '*'
}

app.get('/', cors(corsOptions), (req, res) => {
    res.send("Something god damn shit.")
})

app.listen(port,() => {
    console.log(`Recipe server listening on port ${port}`)
})