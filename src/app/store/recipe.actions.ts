import { createActionGroup, props } from "@ngrx/store"
import { Recipe } from "../dashboard/recipes/recipe.model"

export const RecipeActions = createActionGroup({
    source: 'Recipes API',
    events: {
        
    }
})