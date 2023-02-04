import { Component, OnInit } from '@angular/core'
import { environment } from 'src/environments/environments'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  currentUser!: any

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem(environment.APP_SESSION_KEY) as string)

  }
}
