import { Component, Input, OnInit } from '@angular/core'
import { UserService } from './user/user.service'
import { RecipeService } from './recipes/recipe.service'
import { User } from './user/user.model'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser!: User;
  totalNumberOfRecipes!: number | undefined;
  constructor(private userService: UserService, private recipeService: RecipeService) {}
  
  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser()

    this.totalNumberOfRecipes = this.currentUser.recipes?.length
  }


}