import { createAction, createReducer, on } from "@ngrx/store"
import { Recipe } from "server/src/models/recipe.model"
import * as AppState from '../app.state'



export interface State extends AppState.State { }

export interface RecipeState {
    totalRecipes: number,
    currentRecipe: string
    recipes: typeof Recipe[]
}

const initialState = {}

export const recipeReducer = createReducer(
    { totalRecipes: 2 },
    on(createAction('[Recipe] Get Total Recipes'), state => {
        return {
            ...state,
            totalRecipes: 4
        }
    })
) 