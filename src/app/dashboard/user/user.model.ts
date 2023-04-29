import { Recipe } from "../recipes/recipe.model"

export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    recipes?: Recipe[] | null
    profileImg?: string | null
}