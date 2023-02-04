import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../dashboard/user/user.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [`
    .login-form-container { max-width: 400px; }
  `]
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  loginMessage!: any

  loginUrl: string = 'http://localhost:3000/user/login'

  constructor(
    private router: Router, 
    private http: HttpClient,
    private userService: UserService
  ) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  handleLogin(): any {
    if (this.loginForm.valid) {
      this.userService.userLogInAndRouteToDashboard(this.loginForm.value)
    }
  }
}
