export interface Recipe {
  id: string
  name: string
  description: string
  recipeImg?: string
  cookTime: string
  ingredients: string[]
  directions: string
  rating?: number
  public?: boolean
  tags?: string[]
}
