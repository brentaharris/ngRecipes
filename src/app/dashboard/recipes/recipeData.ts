export interface Recipe {
  _id: string
  title: string
  description: string
  recipeImg?: string
  cookTime: string
  ingredients: string[]
  directions: string
  rating?: number
  public?: boolean
  tags?: string[]
}
