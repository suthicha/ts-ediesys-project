import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';
import { LoginService } from '../services';

@Injectable()
export class GuardActivate implements CanActivate{

    constructor(
        private _router: Router, 
        private _loginService: LoginService){
            
        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        this._loginService.isLogged().subscribe((res) => {
            
            if (res == false)
            {
                this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }
        },
        err => { console.log(err) })

        if (localStorage.getItem('auth') === 'undefined'){
            this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

        return true;
    }
}