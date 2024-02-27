import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './components/service-component/service-list.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ServiceProviderListComponent } from './components/service-provider-component/service-provider-list.component';
import { ServiceDetailsComponent } from './components/service-component/service-details/service-details.component';
import { ServiceUpdateComponent } from './components/service-component/service-update/service-update.component';
import { ServiceCreateComponent } from './components/service-component/service-create/service-create.component';
import { ServiceProviderCreateComponent } from './components/service-provider-component/service-provider-create/service-provider-create.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-component/service-provider-details/service-provider-details.component';
import { ServiceProviderUpdateComponent } from './components/service-provider-component/service-provider-update/service-provider-update.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [  
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},

  //services
  { path: 'services', component: ServiceListComponent },
  {path:'services/create',component:ServiceCreateComponent},
  {path:'services/:id',component:ServiceDetailsComponent},
  {path:'services/update/:id',component:ServiceUpdateComponent},
  //serviceProviders
  {path:'service-providers',component:ServiceProviderListComponent},
  {path:'service-providers/create',component:ServiceProviderCreateComponent},
  {path:'service-providers/:id',component:ServiceProviderDetailsComponent},
  {path:'service-providers/update/:id',component:ServiceProviderUpdateComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
