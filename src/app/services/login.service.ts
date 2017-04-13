import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import { ConfigService } from '../share';
import { IAuth } from '../share';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

declare var $:any;

@Injectable()
export class LoginService {
  
  _baseUrl: string = '';

  constructor(
      private _http: Http,
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
