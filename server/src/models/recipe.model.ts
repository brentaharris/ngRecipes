import { Schema } from 'mongoose'

export interface IRecipe {
    title: string
    desc: string
    cookTime: number
    ingredients: string[]
    directions: string
}


const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    cookTime: { type: Number, required: true },
    ingredients: { type: Schema.Types.Mixed, required: true },
    directions: { type: String, required: true },
})