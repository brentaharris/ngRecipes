import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Recipe } from "./recipe.model"
import { UserService } from "../user/user.service"
import { User } from "../user/user.model"

@Injectable({
	providedIn: 'root'
})
export class RecipeService {
	currentUser: User =  this.userService.getCurrentUser()

	constructor(private userService: UserService, private http: HttpClient) {}

    getAllRecipesByUser(): Observable<Recipe[]> {
		return this.http.get<Recipe[]>(`http://localhost:3000/user/${this.currentUser.id}/allrecipes`)
			.pipe(map((response: Recipe[]) => response))
	}

	getRecipeById(recipeId: string): Observable<Recipe> {
		return this.http.get<Recipe>(`http://localhost:3000/user/${this.currentUser.id}/recipe/${recipeId}`)
			.pipe(map((response: Recipe) => response))
	}

	createRecipe(formValues: FormData): void {
		this.http.post(`http://localhost:3000/user/${this.currentUser.id}/newrecipe`, formValues).subscribe()
	}

	deleteRecipeById(recipeId: string): void {
		this.http.delete(`http://localhost:3000/user/${this.currentUser.id}/recipe/${recipeId}`).subscribe()
	}
}