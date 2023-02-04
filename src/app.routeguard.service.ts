import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { UserService } from './app/dashboard/user/user.service'

@Injectable()
export class AppRouteGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        //check to see if valid user is logged in
        const isAuthorized = !!this.userService.getCurrentUser()

        //return true if authorized which will allow route activation, otherwise, route user to login page
        if (isAuthorized) {
            return true
        }
        else {
            this.router.navigate(['/login'])
            return false
        }
    }
}