import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { namespaceSVG, namespaceHTML } from '@angular/core/src/render3/instructions';

@Injectable({
    providedIn: 'root',
})
export class DemoApiService {
  constructor(public httpClient: HttpClient) { } 
  getApplications(tenantId) {
    return this.httpClient.get(`dashboard/applications?${tenantId}`); 
  }
}  