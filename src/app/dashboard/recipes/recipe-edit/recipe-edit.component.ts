import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RecipeService } from '../recipe.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeEditForm!: FormGroup

  constructor(
    private recipeService: RecipeService, 
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.recipeEditForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      cookTime: new FormControl('', Validators.required),
      ingredients: new FormControl('', Validators.required),
      directions: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required)
    })
  }


  handleUpdateRecipe() {
    // if (this.recipeEditForm.valid) {
    //   this.recipeService.createRecipe(this.recipeEditForm.value)

    //   setTimeout(() => {
    //     this.router.navigate(['user/recipes'])
    //   }, 1500);
    // }
  }

  onBack(): void {
    this.router.navigate(['user/recipes'])
  }
}
