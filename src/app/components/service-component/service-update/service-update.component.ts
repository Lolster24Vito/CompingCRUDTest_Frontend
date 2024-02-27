import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSiteService } from 'src/app/models/WebSiteService.model';
import { WebSiteServiceService } from 'src/app/services/web-site-service.service';

@Component({
  selector: 'app-service-update',
  templateUrl: './service-update.component.html',
  styleUrls: ['./service-update.component.css']
})
export class ServiceUpdateComponent {
  service:WebSiteService=new WebSiteService("",[]);
  updateServiceForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private serviceService: WebSiteServiceService,
    private router: Router, 
    private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    console.log(productIdFromRoute);
    this.getService(productIdFromRoute);
    this.updateServiceForm=this.formBuilder.group({
      descriptionInput: [this.service.descriptionService],
     });
  }

  getService(id:number){
    this.serviceService.getServiceById(id).subscribe(data=>
      {
        this.service=data;
      });
  }
  updateService(){
    let changeService: WebSiteService=this.service;
    changeService.descriptionService=this.updateServiceForm.value.descriptionInput;
    console.log("1");
    console.log(changeService);
    this.serviceService.updateService(changeService);
  }
  /*
   let changeUserInfo:ChangeUserInformationDto={newFirstName: "", newLastName: "",newEmail: ""};
    changeUserInfo.newFirstName=this.updatePersonalForm.value.firstNameInput;
    changeUserInfo.newLastName=this.updatePersonalForm.value.lastNameInput;
    changeUserInfo.newEmail=this.updatePersonalForm.value.emailInput;
    this.currentUserService.changePersonalData(changeUserInfo).subscribe
    */

}
