import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSiteService } from 'src/app/models/WebSiteService.model';
import { WebSiteServiceService } from 'src/app/services/web-site-service.service';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.css']
})
export class ServiceCreateComponent {
  service: WebSiteService = { descriptionService: '', providers: [] };
   createServiceForm!:FormGroup;

  constructor(private router:Router ,
    private serviceService:WebSiteServiceService,
    private formBuilder: FormBuilder
    ){
    
  }
  ngOnInit():void{
    this.createServiceForm=this.formBuilder.group({
      descriptionInput: [this.service.descriptionService],
     });
  }
  createService(){
    console.log(this.service);
    this.serviceService.createService(this.service).subscribe(response=>{
      this.router.navigate(['/services']);
    });
  }

}
