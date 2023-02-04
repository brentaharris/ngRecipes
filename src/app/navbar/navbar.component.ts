import { Component } from '@angular/core'
import { UserService } from '../dashboard/user/user.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    nav { width: 100%; }
  `]
})
export class NavbarComponent {

  constructor(private userService: UserService) {}
  
  logOut() {
    this.userService.userLogOutAndNavigateToLogin()
  }
}
