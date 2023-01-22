import { Component, OnInit } from '@angular/core'
import { Recipe, RECIPES } from '../recipeData'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipes: Recipe[] = RECIPES
  recipe: Recipe | undefined

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.recipe = this.recipes.find(recipe => recipe.id === id)
  }

  onBack(): void {
    this.router.navigate(['user/recipes'])
  }
}
