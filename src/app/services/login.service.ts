import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { AuthSession, ConfigService } from '../share';
import { IAuth, handleError } from '../share';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

declare var $:any;

@Injectable()
export class LoginService {
  
  _baseUrl: string = '';

  constructor(
      private _http: Http,
      private _authSession: AuthSession,
      private _configService: ConfigService) { 
      this._baseUrl = _configService.getApiURI();
  }

  identify(username: string, password: string) : Observable<IAuth>{
    
    let searchParams = new URLSearchParams();
    searchParams.append('username', username);
    searchParams.append('password', password);

    return this._http.get(this._baseUrl + 'login',{ search: searchParams })
        .map((res: Response) => {
              return res.json();
        })
        .catch(handleError);
  }

  isLogged(){

      let searchParams = new URLSearchParams();
      searchParams.append('secretkey', this._authSession.loggedSecretKey);
      
      return this._http.get(this._baseUrl + 'login', {search: searchParams})
        .map((res: Response) => {
            return res.json();
        })
        .catch(handleError);
  }
}
