const baseUrl = 'http://localhost:3000'

export const environment = {
    production: false,
    APP_SESSION_KEY: 'recipeAppCurrentUser',
    LOGIN_URL: 'http://localhost:3000/user/login',
    ALL_RECIPES_URL: `${baseUrl}/user/allrecipes`,
    CREATE_RECIPE_URL: `${baseUrl}/user/newrecipe`

}
