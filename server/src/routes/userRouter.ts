import express from 'express'
import controller from '../controllers/userController'

const router = express.Router()

// router.get('/', controller.getAllUsers) //eventually will need authentication and loading/redirecting to dashboard
router.get('/:userId', controller.getUserById)
router.post('/signup', controller.createUser)
router.delete('/:userId', controller.deleteUser)


export { router }