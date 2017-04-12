import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class GuardActivate implements CanActivate{

    constructor(private _router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        if (localStorage.getItem('auth') === 'undefined'){
            this._router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

        return true;
    }
}