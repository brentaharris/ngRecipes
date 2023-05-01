import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import { User, IUser} from "../models/user.model"
import { Recipe } from "../models/recipe.model"

const createUser = (req: Request, res: Response, next: NextFunction) => {
    let { firstName, lastName, email, password } = req.body
    if(!email || !password) return res.send('Must include email or password')
    console.log(req.body)
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName,
        lastName,
        email,
        password
    })
    console.log(user)
    //TODO add code to check if user exsists first before saving.
    return user
            .save()
            .then((user) => {
                res.status(201).json({ user })
                console.log(user)
            })
            .catch((error) => res.status(500).json({ error }))
}

const getUserById = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    return User
        .findById(userId)
        .then(user => user ? res.status(200).json({ user }) : res.status(404).json({ message: "User not found"}))
        .catch((error) => res.status(500).json({ error }))
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    return User.find()
        .then(users => res.status(200).json({ users }))
        .catch(error => res.status(500).json({ error }))
}


const deleteUser = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    return User
        .findByIdAndDelete(userId)
        .then((user) => (user ? res.status(200).json({ message: "User Account Deleted"}) : res.status(404).json({ message: "User account not found" })))
        .catch((error) => res.status(500).json({ error }))
}

/// ********************************* ///
const loginUser = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    if(!email || !password) return res.send('Must include email or password')

    User.findOne({ email: email }, (error: Error, user: IUser) => {
  
        //compare pw
       user.comparePasswords(password, (error, isMatch) => {
            // if (error) res.send({ message: 'Password error'})
            if (isMatch) {

                return res.send({ user, success: true })
            }
            else {
                return res.send({ success: false })
            }
        })
        //add catch error
    })
    //add errors
}



/* RECIPE FUNCTIONS  */
const getAllRecipesByUserId = (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    return User.findOne({ _id: userId }).then(user => {
            res.send(user?.recipes)
        } 
    )
}

const getUserRecipeById = (req: Request, res: Response, next: NextFunction) => {
    const { userId, recipeId } = req.params
    return User.findOne({ _id: userId })
        .then(user => res.send(user?.recipes?.find(recipe => recipe._id == recipeId)))
}


const createNewRecipe = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId

    const newRecipe = new Recipe({
        _id: new mongoose.Types.ObjectId,
        title: String(req.body.title),
        description: String(req.body.description),
        cookTime: Number(req.body.cookTime),
        ingredients: Array(req.body.ingredients),
        directions: String(req.body.directions),
        tags: Array(req.body.tags)
    })
    console.log(newRecipe)

    return User.findOne({ _id: userId })
        .then(user => { 
            try {
                user?.recipes?.push(newRecipe)
                user?.save()
            } catch (error) {
                res.sendStatus(500).json({ message: `Unable to save recipe due to error: ${error}`})
            }
        })
        .catch(error => res.sendStatus(500).json({ message: error.message }))
}

const deleteRecipeById = (req: Request, res: Response, next: NextFunction) => {

    const { userId, recipeId } = req.params
    console.log(userId, recipeId)

    // check if user exsists
    User.findOne({ _id: userId}, (err:any, result:any) => {
        if(err){
            console.error("Cannot get user", err)
            res.status(500).end()
        } else {
            const recipe = result.recipes.find((r:any) => r._id == recipeId)
            console.log(recipe)
            //find user and recipe
            User.findOneAndUpdate(
                { _id: userId},
                {
                    $pull: {
                        recipes: recipe, //$pull deletes recipe from specific user
                    },
                },
                { new: true }, //determines if operation returns the new result
                (err, result) => {
                    if(err) {
                        console.error("Cannot updated user recipe", err)
                        res.status(500).end()
                    } else {
                        res.status(200).json({ message: "Recipe Deleted"})
                    }
                }
            )
        }
    })
}


export default { 
    createUser, 
    getUserById, 
    getAllUsers, 
    deleteUser, 
    loginUser,
    getAllRecipesByUserId,
    createNewRecipe,
    getUserRecipeById,
    deleteRecipeById
}