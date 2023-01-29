export {} //fixed block scoped variable bug in typescript

const express = require('express')
const router = express.Router()


router.get('/users', (req: any, res: any) => {
    res.send([
        { username: "Dude"},
        { username: "Lebowski"}
    ])
})
module.exports = router