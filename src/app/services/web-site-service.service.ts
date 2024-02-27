import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebSiteService } from '../models/WebSiteService.model';
import { BASE_URL } from '../config/config';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WebSiteServiceService {
  private apiUrl = BASE_URL+'services/';

  constructor(private http: HttpClient,private router:Router) {}
  
  getServices(): Observable<WebSiteService[]> {
    return this.http.get<WebSiteService[]>(this.apiUrl);
  }


  getServiceById(id:number): Observable<WebSiteService> {
    return this.http.get<WebSiteService>(this.apiUrl+id);
  }
  updateService(service:WebSiteService){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let w:WebSiteService;
    console.log("Update service 2 here");

     this.http.put<WebSiteService>(this.apiUrl+service.id,service,httpOptions).subscribe(  updatedService => {
      //     this.router.navigate(['/edit-service', serviceId]);
      this.router.navigate(['services']);
    },
    error => {
      console.error('Error updating service:', error);
    }
  );
    
  }
  deleteService(id:Number){
    return this.http.delete<WebSiteService>(this.apiUrl+id);

  }
  createService(service:WebSiteService):Observable<WebSiteService>{
    return this.http.post<WebSiteService>(this.apiUrl,service);
  }

  
}
