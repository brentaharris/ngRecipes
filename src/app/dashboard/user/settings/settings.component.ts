import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser!: any

  constructor() {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(sessionStorage.getItem(environment.APP_SESSION_KEY) as string)
  }
}
