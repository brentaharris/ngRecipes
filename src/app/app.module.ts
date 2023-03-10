import { NgModule, isDevMode } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRouteGuardService } from 'src/app.routeguard.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { SignupFormComponent } from './signup-form/signup-form.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesHomeComponent } from './dashboard/recipes/recipes-home/recipes-home.component';
import { UserComponent } from './dashboard/user/user.component';
import { NewRecipeFormComponent } from './dashboard/recipes/new-recipe-form/new-recipe-form.component';
import { SettingsComponent } from './dashboard/user/settings/settings.component';
import { RecipeDetailComponent } from './dashboard/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './dashboard/recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './dashboard/recipes/recipe-edit/recipe-edit.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { recipeReducer } from './store/recipe.reducer'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    DashboardComponent,
    NavbarComponent,
    RecipesHomeComponent,
    UserComponent,
    NewRecipeFormComponent,
    SettingsComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('recipe', recipeReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [AppRouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
