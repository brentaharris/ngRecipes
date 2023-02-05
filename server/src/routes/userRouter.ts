import express from 'express'
import controller from '../controllers/userController'

const router = express.Router()

// router.get('/', controller.getAllUsers) //eventually will need authentication and loading/redirecting to dashboard
router.get('/:userId', controller.getUserById)

router.get('/:userId/allrecipes', controller.getAllRecipesByUserId)

router.post('/:userId/newrecipe', controller.createNewRecipe)

router.post('/signup', controller.createUser)
router.post('/login', controller.loginUser)
router.delete('/:userId', controller.deleteUser)


export { router }
