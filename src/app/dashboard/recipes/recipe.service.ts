import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Recipe } from "./recipeData"
import { UserService } from "../user/user.service"

@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	constructor(private userService: UserService, private http: HttpClient) {}

	//id
	//name
	//desc
	//ingredients
	//cookTime
	//tags
	//directions

    getAllRecipesByUser(): Recipe[] {
		const currentUser = this.userService.getCurrentUser()
		let recipes: Recipe[] = []
		
		this.http.get<any>('http://localhost:3000/user/' + currentUser.id + '/allrecipes').subscribe({
			next: (response) => {
				recipes = response
			},
			error: (e) => {
				console.log(e)
			},
			complete: () => {}
		})

		return recipes
	}
}