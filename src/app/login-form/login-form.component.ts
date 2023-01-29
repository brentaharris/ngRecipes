import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
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
  loginMessage!: any

  loginUrl: string = 'http://localhost:3000/login'

  constructor(private router: Router, private http: HttpClient) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  handleLogin(): any {
    this.http.get<any>(this.loginUrl).subscribe({
      next: (res) => console.log(res),
      error: (e) => console.error(e),
      //completefn runs after subscription completes
      complete: () => this.loginMessage ='Logged in successfully'
    })

    //todo after success login
    // this.router.navigate(['/user/dashboard'])
  }
  
}
