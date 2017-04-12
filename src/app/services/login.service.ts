import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { AppConfig } from '../share/app.config';
import { IAuth } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

declare var $:any;
const host = AppConfig.host;
const api = '/api/login';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  identify(username: string, password: string) : Observable<IAuth>{
    
    let searchParams = new URLSearchParams();
    searchParams.append('username', username);
    searchParams.append('password', password);

    return this._http.get(host + api,{ search: searchParams })
        .map(this.extractData)
        .catch(this.handleError);
  }

  private extractData(res:Response) {
        let body = res.json();
        return body || {};
  }

  private handleError(error:any) {
        let errMsg = (error.message) ? error.message :
            error.status ? '${error.status} - ${error.statusText}' : 'Server error';
        return Observable.throw(errMsg);
  }

}
