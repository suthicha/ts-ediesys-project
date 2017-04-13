import { Injectable } from '@angular/core';
import { Http, Request, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { ConfigService, IUser } from '../share';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class RegisterService {

  _baseUrl: string = '';

  constructor(
    private _http: Http,
    private _configService: ConfigService) { 
      this._baseUrl = _configService.getApiURI();
    }

   createUser(user: any){

      let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(user);

      return this._http.post(this._baseUrl + 'user', body, options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
    } 

    private handleError(error: any) {
      var applicationError = error.headers.get('Application-Error');
      var serverError = error.json();
      var modelStateErrors: string = '';

      if (!serverError.type) {
          console.log(serverError);
          for (var key in serverError) {
              if (serverError[key])
                  modelStateErrors += serverError[key] + '\n';
          }
      }

      modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

      return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }

}
