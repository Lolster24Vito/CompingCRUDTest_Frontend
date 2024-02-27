import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebSiteServiceProvider } from 'src/app/models/WebSiteServiceProvider.model';
import { WebSiteProvidersService } from 'src/app/services/web-site-providers.service';

@Component({
  selector: 'app-service-provider-details',
  templateUrl: './service-provider-details.component.html',
  styleUrls: ['./service-provider-details.component.css']
})
export class ServiceProviderDetailsComponent {
  serviceProvider:WebSiteServiceProvider=new WebSiteServiceProvider("",[],-1);
  constructor(
    private route: ActivatedRoute,
    private providerService: WebSiteProvidersService,
    private router: Router//, private formBuilder: FormBuilder
    ) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    console.log(idFromRoute);
    this.getServiceProvider(idFromRoute);
    //this.getQuiz(productIdFromRoute);
    //this.quizAnswerFormGroup = this.formBuilder.group({});
  }
  getServiceProvider(id:number){
    this.providerService.getServiceProviderById(id).subscribe(data=>
      {
        this.serviceProvider=data;
      });
  }
}
