import { Recipe } from "../recipes/recipeData"

export interface User {
    firstName: string
    lastName: string
    email: string
    userRecipes?: Recipe[]
    profileImg?: string
}