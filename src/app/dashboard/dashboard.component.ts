import { Component, OnInit, OnDestroy } from '@angular/core'
import { UserService } from './user/user.service'
import { RecipeService } from './recipes/recipe.service'
import { User } from './user/user.model'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
  currentUser!: User
  totalNumberOfRecipes$!: number

  constructor(
    private userService: UserService, 
    private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser()
    this.recipeService.getAllRecipesByUser().subscribe(recipes => this.totalNumberOfRecipes$ = recipes.length)
  }

  ngOnDestroy(): void {
    // this.totalNumberOfRecipes$.unsubscribe() ??
  }

}
