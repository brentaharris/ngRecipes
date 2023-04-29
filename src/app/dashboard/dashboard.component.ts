import { Component, Input, OnInit } from '@angular/core'
import { UserService } from './user/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser!: any
  totalRecipes!: any

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser()

  }
}
