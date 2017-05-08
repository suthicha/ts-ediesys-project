import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { ConfigService, IAuth, IMessageOrder, handleError } from '../share';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderService {

  _baseUrl: string = "";

  constructor(
    private _http: Http, 
    private _configService: ConfigService) { 
    this._baseUrl = _configService.getApiURI();        
  }

  getOrders(token: string, userid: any) : Observable<IMessageOrder[]>{

    let searchParams = new URLSearchParams();
    searchParams.append("token", token);
    searchParams.append("userid", userid);

    return this._http.get(this._baseUrl + "ReceiveMessage", { search: searchParams })
    .map((res: Response) => {
      return res.json();
    })
    .catch(handleError);
  }

  getOrderAll(token: string){
    
    let searchParams = new URLSearchParams();
    searchParams.append("token", token);

    return this._http.get(this._baseUrl + "ReceiveMessage/SelectAll", { search: searchParams })
    .map((res: Response) => {
      return res.json();
    })
    .catch(handleError);
  }
}
