import { Component } from '@angular/core';
import { RECIPES } from '../recipeData';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes = RECIPES
}
