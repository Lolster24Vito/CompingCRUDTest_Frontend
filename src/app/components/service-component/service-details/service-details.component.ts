import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSiteService } from 'src/app/models/WebSiteService.model';
import { WebSiteServiceService } from 'src/app/services/web-site-service.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  
  service:WebSiteService=new WebSiteService("",[],-1);
  constructor(
    private route: ActivatedRoute,
    private serviceService: WebSiteServiceService,
    private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    this.getService(productIdFromRoute);

  }
  getService(id:number){
    this.serviceService.getServiceById(id).subscribe(data=>
      {
        this.service=data;
      });
  }

}
