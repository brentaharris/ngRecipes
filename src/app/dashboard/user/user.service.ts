import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environments'
// import { catchError, Observable, tap, throwError } from 'rxjs'
// import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router) {}

    userLogInAndNavigateToLogin(): void {}


    getCurrentUser() { 
        return JSON.parse(sessionStorage.getItem(environment.APP_SESSION_KEY) as string)
    }


    userLogOutAndNavigateToLogin(): void {
        sessionStorage.removeItem(environment.APP_SESSION_KEY)
        this.router.navigate(['/login'])
    }
}