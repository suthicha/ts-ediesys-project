import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { ConfigService, IAuth, IUser, handleError } from '../share';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UserService {

  _baseUrl: string = '';

  constructor(
      private _http: Http, 
      private _configService: ConfigService) { 
        this._baseUrl = _configService.getApiURI();
      }

  
  putUser(user: IUser): Observable<IAuth>{
      
      let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
   
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(user);
      
      return this._http.put(this._baseUrl + 'user', body, options)
        .map((res: Response) => res.json())
        .catch(handleError);
  }

  putResetPassword(id: any, username: string, password: string, secretkey: string) : Observable<IAuth>{
      
      let headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
      let options = new RequestOptions({ headers: headers });
      let obj = {
          id: id,
          username: username,
          password: password,
          secretkey: secretkey
      }
      let body = JSON.stringify(obj);
      
      return this._http.put(this._baseUrl + 'user/' + id, body, options)
        .map((res: Response) => res.json())
        .catch(handleError);
  }

}
