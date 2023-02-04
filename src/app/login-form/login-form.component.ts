import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
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

  loginUrl: string = 'http://localhost:3000/user/login'

  constructor(private router: Router, private http: HttpClient) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  handleLogin(): any {
    this.http.post<any>(this.loginUrl, this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res)
        if (res.success === 'true'){
          this.loginMessage = "Successfully logged in"
          setTimeout(() => {
            this.router.navigate(['/user/dashboard'])
          }, 1000)
        }
      },
      error: (e) => console.error(e),
      //completefn runs after subscription completes
      complete: () => {}
    })
  }
  
}
