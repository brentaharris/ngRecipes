import express from 'express'
import controller from '../controllers/userController'

const router = express.Router()

//get routes
// router.get('/', controller.getAllUsers) //eventually will need authentication and loading/redirecting to dashboard
router.get('/:userId', controller.getUserById)
router.get('/:userId/allrecipes', controller.getAllRecipesByUserId)
router.get('/:userId/recipe/:recipeId', controller.getUserRecipeById)

//DELETE routes
router.delete('/:userId/recipe/:recipeId', controller.deleteRecipeById)
//need to implement delete user
router.delete('/:userId', controller.deleteUser)

//POST routes
router.post('/:userId/newrecipe', controller.createNewRecipe)
router.post('/signup', controller.createUser)
router.post('/login', controller.loginUser)




export { router }
