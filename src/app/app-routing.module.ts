import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecipesHomeComponent } from './dashboard/recipes/recipes-home/recipes-home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SettingsComponent } from './dashboard/user/settings/settings.component';

const routes: Routes = [
  { path: 'user/dashboard', component: DashboardComponent },
  { path: 'user/recipes', component: RecipesHomeComponent },
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
