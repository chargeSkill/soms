import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { namespaceSVG, namespaceHTML } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root',
})

export class NavApiService {
  constructor(public httpClient: HttpClient) { } 

  login(params){
    return this.httpClient.post(`login?_allow_anonymous=true`,params); 
  }

  getJson(){
    return this.httpClient.get(`nav.json`);
  }

  getNavList(params) {
    return this.httpClient.post(`tree/loadUserTree`,params); 
  }

  getCylinder(params){
    return this.httpClient.get(`cylinder/findPageData`,params)
  }
}  