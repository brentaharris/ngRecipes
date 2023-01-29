export {} //fixed block scoped variable bug in typescript

const express = require('express')
const router = express.Router()
import controller from '../controllers/User.controller'


router.get('/:userId', controller.getUserById)
router.post('/signup', controller.createUser)
router.delete('/user/:userId', controller.deleteUser)

export default router