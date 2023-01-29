import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

@Component({
  templateUrl: './signup-form.component.html',
  styles: [`
    .signup-form-container { max-width: 400px; }
  `]
})
export class SignupFormComponent implements OnInit {
  signUpForm!: FormGroup
  signupMessage!: any
  errorMessage!: string
  displaySuccess: boolean = false
  displayError: boolean = false
  signupUrl: string = 'http://localhost:3000/user/signup'

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      // password: new FormControl('', Validators.required),
      // confirmPassword: new FormControl('', Validators.required)
    })
  }

  handleSignup(): any {
    if (this.signUpForm.valid) {
      this.http.post<any>(this.signupUrl, this.signUpForm.value).subscribe({
        next: (res) => console.log(res),
        error: (e) => {
          console.error(e)
          this.displayError = true
          this.errorMessage = "Signup Error"
        },
        complete: () => {
          this.displaySuccess = true
          this.signupMessage = 'User signup success'
        }
      })
    }

    //if sign up user completes w/o error, navigate to login page
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 3000);
  }


  cancel(): void {
    this.router.navigate(['/login'])
  }
}
