import { Component, Input, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { UserService } from './user/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser!: any
  totalRecipes!: any

  constructor(private userService: UserService, private store: Store<any>) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser()


    //under construction
    this.store.select('recipe').subscribe(
      state => {
        this.totalRecipes = state.totalRecipes
      }
    )

  }
}
