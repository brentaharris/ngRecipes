import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
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
  data!: any

  private loginUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private router: Router, private http: HttpClient) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  handleLogin(): any {
    // console.log(this.loginForm.value)
    // this.router.navigate(['/user/dashboard'])
    this.data = this.http.get(this.loginUrl)
  }
}
