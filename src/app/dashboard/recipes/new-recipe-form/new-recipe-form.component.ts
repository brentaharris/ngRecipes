import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-recipe-form',
  templateUrl: './new-recipe-form.component.html',
  styleUrls: ['./new-recipe-form.component.css']
})
export class NewRecipeFormComponent {
  constructor(private router: Router) { }

  onBack(): void {
    this.router.navigate(['user/recipes'])
  }
}
