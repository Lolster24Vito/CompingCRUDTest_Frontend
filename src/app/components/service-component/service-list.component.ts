import { Component, OnInit } from '@angular/core';
import { WebSiteService } from '../../models/WebSiteService.model'
import { WebSiteServiceService } from '../../services/web-site-service.service'
import { Router } from '@angular/router';
import { BASE_URL } from 'src/app/config/config';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent  implements OnInit{
  services:WebSiteService[]=[];
  constructor(private router:Router ,private serviceService:WebSiteServiceService){

  }
  ngOnInit(): void {
this.loadServices();
  }
  loadServices():void{
    this.serviceService.getServices().subscribe(
      (data)=>{
        this.services=data;
      }
    )
  }
  updateService(service:WebSiteService):void{
    this.router.navigate([BASE_URL+'edit-service',service.id]);
  }
  deleteService(id:number){
    if(confirm("Are you sure to delete this?")) {
      console.log("Implement delete functionality here");
      this.serviceService.deleteService(id).subscribe({
        next: (response) => {
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
    }

  }

}
