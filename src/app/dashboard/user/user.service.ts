import { Router } from '@angular/router'
import { Injectable } from '@angular/core'
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

    
    userLogOut(): void {
        sessionStorage.clear()
        this.router.navigate(['/login'])
    }
}