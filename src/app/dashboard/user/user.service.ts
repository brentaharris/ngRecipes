import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environments'
// import { catchError, Observable, tap, throwError } from 'rxjs'
// import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private router: Router, private http: HttpClient) {}

    userLogInAndRouteToDashboard(formValues: any) {
        this.http.post<any>(environment.LOGIN_URL, formValues).subscribe({
            next: (res) => {
                const currentUser = { 
                    id: res.user._id, 
                    name: res.user.name, 
                    email: res.user.email, 
                    recipes: res.user.recipes
                }
                console.log(currentUser)
                //save current user to browser for use elsewhere
                if (res.success) {
                    sessionStorage.setItem(environment.APP_SESSION_KEY, JSON.stringify(currentUser))
                    setTimeout(() => {
                        this.router.navigate(['/user/dashboard'])
                    }, 1000);
                }
            },
            error: (e) => console.error(e),
            //completefn runs after subscription completes
            complete: () => { }
        })
    }


    getCurrentUser() { 
        return JSON.parse(sessionStorage.getItem(environment.APP_SESSION_KEY) as string)
    }


    userLogOutAndNavigateToLogin(): void {
        sessionStorage.removeItem(environment.APP_SESSION_KEY)
        this.router.navigate(['/login'])
    }
}