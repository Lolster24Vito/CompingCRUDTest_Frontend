import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WebSiteServiceProvider } from 'src/app/models/WebSiteServiceProvider.model';
import { WebSiteProvidersService } from 'src/app/services/web-site-providers.service';

@Component({
  selector: 'app-service-provider-list',
  templateUrl: './service-provider-list.component.html',
  styleUrls: ['./service-provider-list.component.css']
})
export class ServiceProviderListComponent {
  serviceProviders:WebSiteServiceProvider[]=[];

  constructor(private router:Router ,
    private serviceProviderService:WebSiteProvidersService){
    
  }
  ngOnInit():void{
    this.loadServiceProviders();
  }
  loadServiceProviders():void{
    this.serviceProviderService.getServiceProviders().subscribe(
      (data)=>{
        this.serviceProviders=data;
      }
    )
  }
  deleteServiceProvider(id:number){
    if(confirm("Are you sure to delete this?")) {
      this.serviceProviderService.deleteServiceProvider(id).subscribe({
        next: (response) => {
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
    }

  }

}
