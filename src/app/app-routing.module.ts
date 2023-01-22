import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecipesHomeComponent } from './dashboard/recipes/recipes-home/recipes-home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SettingsComponent } from './dashboard/user/settings/settings.component';
import { RecipeDetailComponent } from './dashboard/recipes/recipe-detail/recipe-detail.component';
import { NewRecipeFormComponent } from './dashboard/recipes/new-recipe-form/new-recipe-form.component';

const routes: Routes = [
  { path: 'user/dashboard', component: DashboardComponent },
  { path: 'user/recipes/new', component: NewRecipeFormComponent },
  { path: 'user/recipes', component: RecipesHomeComponent },
  { path: 'user/recipes/:id', component: RecipeDetailComponent },
  { path: 'user/settings', component: SettingsComponent },
  { path: 'signup', component: SignupFormComponent},
  { path: 'login', component: LoginFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
