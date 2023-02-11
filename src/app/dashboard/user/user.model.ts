import { Recipe } from "../recipes/recipe.model"

export interface User {
    firstName: string
    lastName: string
    email: string
    userRecipes?: Recipe[]
    profileImg?: string
}