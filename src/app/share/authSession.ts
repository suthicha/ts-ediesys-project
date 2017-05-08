import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthSession{
    authValue = new Subject();

    set setSession(auth){
        this.authValue.next(auth);
        if (auth == undefined || auth === 'undefined'){
            localStorage.setItem('auth', undefined);
        }else{
            localStorage.setItem('auth', JSON.stringify(auth));
        }
    }

    get getSession(){
        if (localStorage.getItem('auth') == 'undefined')
            return null;
        return JSON.parse(localStorage.getItem('auth')) || undefined;
    }

    get loggedStatus(){
        return this.getSession === 'undefined' ? false: true;
    }

    get loggedSecretKey(){
        console.log(this.getSession.secretkey);
        if (this.getSession == null)
            return "";
        return this.getSession.secretkey;
    }
}