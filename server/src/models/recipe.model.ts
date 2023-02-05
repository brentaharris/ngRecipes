import { model, Schema, Document } from 'mongoose'

export interface IRecipe extends Document {
    title: string
    description: string
    cookTime: number
    ingredients: string[]
    directions: string
    tags: string[]
}


const recipeSchema = new Schema<IRecipe>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    cookTime: { type: Number, required: true },
    ingredients: [],
    directions: { type: String, required: true },
    tags: []
})


export const Recipe = model<IRecipe>('Recipe', recipeSchema)