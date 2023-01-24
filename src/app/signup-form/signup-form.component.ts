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
  displaySuccess: boolean = false

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  }

  handleSignUp():void {
    
    if (this.signUpForm.valid) {
      this.http.post('https://recipes-3664f-default-rtdb.firebaseio.com/users.json', this.signUpForm.value).subscribe(response => {
        console.log(response)
        if (response) {
          this.displaySuccess = true
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 3000)
        }
      })

    } 
  }

  cancel() {
    this.router.navigate(['/login'])
  }
}
