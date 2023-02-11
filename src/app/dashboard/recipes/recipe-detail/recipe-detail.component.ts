import { Component, OnInit } from '@angular/core'
import { Recipe } from '../recipe.model'
import { ActivatedRoute, Router } from '@angular/router'
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id']
 
    this.recipeService.getRecipeById(id).subscribe((recipe: Recipe) => {
      this.recipe = recipe
    })
  }

  onBack(): void {
    this.router.navigate(['user/recipes'])
  }
}
