import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, Observable, tap, throwError } from 'rxjs'
// import { User } from './user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private loginUrl = 'http://localhost:3000/'
    private headers = new HttpHeaders().set('Content-Type', 'application/json')

    constructor(private http: HttpClient) {}

    handleError(error: HttpErrorResponse) {
        return throwError(() => error)
    }

    logIn(): any {
        return this.http.get(this.loginUrl).subscribe((res: any) => {
        console.log(res)
        })
            
    }
}