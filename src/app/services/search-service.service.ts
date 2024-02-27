import { Injectable } from '@angular/core';
import { BASE_URL } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SearchResponse } from '../models/searcheResponse.model';
import { Observable } from 'rxjs';
import { SearchFormData } from '../models/searchFormData';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = BASE_URL+'search/';

  constructor(private http: HttpClient,private router:Router) {}

  getSearchResponse(searchForm:SearchFormData): Observable<SearchResponse> {
    return this.http.post<SearchResponse>(this.apiUrl,searchForm);
  }
}

/*
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSiteService } from '../models/WebSiteService.model';
import { WebSiteServiceProvider } from '../models/WebSiteServiceProvider.model';
import { BASE_URL } from '../config/config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebSiteProvidersService {
  private apiUrl = BASE_URL+'service-providers/';

  constructor(private http: HttpClient,private router:Router) {}
  
  getServiceProviders(): Observable<WebSiteServiceProvider[]> {
    return this.http.get<WebSiteServiceProvider[]>(this.apiUrl);
  }
  getServiceProviderById(id:number): Observable<WebSiteServiceProvider> {
    return this.http.get<WebSiteServiceProvider>(this.apiUrl+id);
  }
  updateServiceProvider(provider:WebSiteServiceProvider){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };


     this.http.put<WebSiteService>(this.apiUrl+provider.id,provider,httpOptions).subscribe(  updatedService => {
      //     this.router.navigate(['/edit-service', serviceId]);
      this.router.navigate(['service-providers/']);
    },
    error => {
      console.error('Error updating service:', error);
    }
  );
  }
  deleteServiceProvider(id:Number){
    return this.http.delete<WebSiteServiceProvider>(this.apiUrl+id);

  }
  createServiceProvider(service:WebSiteServiceProvider):Observable<WebSiteServiceProvider>{
    return this.http.post<WebSiteServiceProvider>(this.apiUrl,service);
  }
}

*/