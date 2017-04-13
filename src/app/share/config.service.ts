import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
    
    _apiURI : string;

    constructor() {
        this._apiURI = 'http://127.0.0.1:8081/EDIEService/api/';
     }

     getApiURI() {
         return this._apiURI;
     }

     getApiHost() {
         return this._apiURI.replace('api/','');
     }
}