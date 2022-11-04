import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class RouteGuardService implements CanActivate{


    constructor(private router : Router){}

    canActivate() {
        let x = localStorage.getItem('token')
        if(localStorage.getItem('token')){
            debugger
            return true
        } else {
            debugger
            this.router.navigateByUrl('login')
            return false
        }
    }
}