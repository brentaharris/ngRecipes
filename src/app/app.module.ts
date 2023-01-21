import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesHomeComponent } from './dashboard/recipes/recipes-home/recipes-home.component';
import { UserComponent } from './dashboard/user/user.component';
import { NewRecipeFormComponent } from './dashboard/recipes/new-recipe-form/new-recipe-form.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    DashboardComponent,
    NavbarComponent,
    RecipesHomeComponent,
    UserComponent,
    NewRecipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
