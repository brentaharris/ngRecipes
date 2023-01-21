import { Component, OnInit } from '@angular/core'
import { Form, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [`
    .login-form-container { max-width: 400px; }
  `]
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  handleLogin(): void {
    console.log(this.loginForm.value)
    this.router.navigate(['/dashboard'])
  }
}
