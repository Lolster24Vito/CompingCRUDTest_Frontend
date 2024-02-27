import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSiteService } from 'src/app/models/WebSiteService.model';
import { WebSiteServiceProvider } from 'src/app/models/WebSiteServiceProvider.model';
import { WebSiteProvidersService } from 'src/app/services/web-site-providers.service';
import { WebSiteServiceService } from 'src/app/services/web-site-service.service';

@Component({
  selector: 'app-service-provider-update',
  templateUrl: './service-provider-update.component.html',
  styleUrls: ['./service-provider-update.component.css']
})
export class ServiceProviderUpdateComponent {
  provider:WebSiteServiceProvider=new WebSiteServiceProvider("",[]);
  updateProviderForm!: FormGroup;
  allServices!:WebSiteService[];
  selectedServicesList!: WebSiteService[];

  constructor(
    private route: ActivatedRoute,
    private providerService: WebSiteProvidersService,
    private serviceService:WebSiteServiceService,
    private router: Router, 
    private formBuilder: FormBuilder) {

  }
  
  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.loadServices();

    this.getServiceProvider(idFromRoute);


    this.selectedServicesList=this.provider.services;
    this.updateProviderForm=this.formBuilder.group({
      nameInput: [this.provider.name],
      servicesInput: this.formBuilder.control(this.provider.services)
    });
  }
  loadServices():void{
    this.serviceService.getServices().subscribe(
      (data)=>{
        this.allServices=data;
      }
    )
  }
  getServiceProvider(id:number){
    this.providerService.getServiceProviderById(id).subscribe(data=>
      {
        this.provider=data;
      });
  }
  updateServiceProvider(){
    let changeProvider: WebSiteServiceProvider=this.provider;
    changeProvider.name=this.updateProviderForm.value.nameInput;
    changeProvider.services= this.updateProviderForm.value.selectedServices;
      console.log("variable check;")
    console.log(changeProvider);
    console.log("form check");
    console.log(this.updateProviderForm.value.selectedServices);
    this.providerService.updateServiceProvider(changeProvider);
  }

onOptionsSelected(event: any): void {
  // Extract selected values from the event
  const selectedValues: string[] = Array.from(event.target.selectedOptions, (option: any) => option.value);
  console.log("Selected values:", selectedValues);
}


}
