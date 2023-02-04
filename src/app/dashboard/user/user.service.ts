import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environments'
// import { catchError, Observable, tap, throwError } from 'rxjs'
// import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // private loginUrl = 'http://localhost:3000/'
    // private headers = new HttpHeaders().set('Content-Type', 'application/json')

    constructor(private router: Router) {}

    // handleError(error: HttpErrorResponse) {
    //     return throwError(() => error)
    // }

    userLogIn(): void {
        
    }

    getCurrentUser() { 
        return JSON.stringify(sessionStorage.getItem(environment.APP_SESSION_KEY) as string)
    }

    userLogOut(): void {
        sessionStorage.removeItem(environment.APP_SESSION_KEY)
        this.router.navigate(['/login'])
    }
}