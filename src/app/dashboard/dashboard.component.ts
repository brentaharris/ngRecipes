import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser!: any

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem('recipeAppUser') as string)

  }
}
