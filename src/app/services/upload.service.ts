import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams} from '@angular/http';
import { ConfigService, IAuth, IUser, handleError } from '../share';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadService {

  _baseUrl: string = '';

  constructor(
    private _http: Http, 
    private _configService: ConfigService) { 
      this._baseUrl = _configService.getApiURI();
    }
    
  upload(files: any, id: any, taxno: string, doctype: string, secretkey: string, remark: string){

      let input = new FormData();

      for(var i=0; i < files.length;i++){
        input.append("file", files[i]);
      }

      input.append("id", id);
      input.append("taxno", taxno);
      input.append("secretkey", secretkey);
      input.append("doctype", doctype);
      input.append("remark", remark);
      
      return this._http.post(this._baseUrl + "upload", input)
        .map((res: Response)=>{
          return res.json();
        })
        .catch(handleError); 
  }

}
