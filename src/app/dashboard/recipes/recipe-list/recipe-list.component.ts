import { Component, OnInit, Output } from '@angular/core'
import { RecipeService } from '../recipe.service'
import { Recipe } from '../recipeData'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getAllRecipesByUser().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    })

  }
}
