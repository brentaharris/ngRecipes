import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  templateUrl: './signup-form.component.html',
  styles: [`
    .signup-form-container { max-width: 400px; }
  `]
})
export class SignupFormComponent implements OnInit {
  signUpForm!: FormGroup

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  handleSignUp():void {
    console.log('You have successfully signed up')
    this.router.navigate(['/login'])
  }

  cancel() {
    this.router.navigate(['/login'])
  }
}
