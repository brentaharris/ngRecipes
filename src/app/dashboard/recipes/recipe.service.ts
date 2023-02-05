import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap, map } from 'rxjs/operators'
import { Recipe } from "./recipeData"
import { UserService } from "../user/user.service"

@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	constructor(private userService: UserService, private http: HttpClient) {}

	
    getAllRecipesByUser(): Observable<Recipe[]> {
		const currentUser = this.userService.getCurrentUser()

		return this.http.get<Recipe[]>(`http://localhost:3000/user/${currentUser.id}/allrecipes`)
		.pipe(map((response: Recipe[]) => { return response }))
	}


	getRecipeById(recipeId: string): Observable<Recipe> {
		const currentUser = this.userService.getCurrentUser()

		return this.http.get<Recipe>(`http://localhost:3000/user/${currentUser.id}/recipe/${recipeId}`)
		.pipe(map((response: Recipe) => { return response }))
	}

	
	createRecipe(formValues: any): void {
		const currentUser = this.userService.getCurrentUser()

		this.http.post(`http://localhost:3000/user/${currentUser.id}/newrecipe`, formValues).subscribe({})
	}
}