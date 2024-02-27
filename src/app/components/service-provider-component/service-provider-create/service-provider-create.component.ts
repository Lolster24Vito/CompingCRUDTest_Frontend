import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSiteServiceProvider } from 'src/app/models/WebSiteServiceProvider.model';
import { WebSiteProvidersService } from 'src/app/services/web-site-providers.service';

@Component({
  selector: 'app-service-provider-create',
  templateUrl: './service-provider-create.component.html',
  styleUrls: ['./service-provider-create.component.css']
})
export class ServiceProviderCreateComponent {
  provider:WebSiteServiceProvider=new WebSiteServiceProvider("",[]);
  createProviderForm!:FormGroup;

  constructor(private router:Router ,
    private providerService:WebSiteProvidersService,
    private formBuilder: FormBuilder
    ){
    
  }


ngOnInit():void{
  this.createProviderForm=this.formBuilder.group({
    nameInput: [this.provider.name],
   });
}
createProvider(){
  this.providerService.createServiceProvider(this.provider).subscribe(
    response=>{
      this.router.navigate(['/service-providers/']);
    }
  )
}
}
