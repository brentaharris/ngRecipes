import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RecipeService } from '../recipe.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent implements OnInit {
  recipeForm!: FormGroup

  constructor(
    private recipeService: RecipeService, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.recipeForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cookTime: new FormControl('', Validators.required),
      ingredients: new FormControl('', Validators.required),
      directions: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required)
    })
  }


  handleSubmitRecipe() {
    if (this.recipeForm.valid) {
      this.recipeService.createRecipe(this.recipeForm.value)

      // setTimeout(() => {
      //   this.router.navigate(['user/recipes'])
      // }, 1000);
    }
  }

  onBack(): void {
    this.router.navigate(['user/recipes'])
  }
}
