import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceListComponent } from './components/service-component/service-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { ServiceProviderListComponent } from './components/service-provider-component/service-provider-list.component';
import { ServiceDetailsComponent } from './components/service-component/service-details/service-details.component';
import { ServiceUpdateComponent } from './components/service-component/service-update/service-update.component';
import { ServiceCreateComponent } from './components/service-component/service-create/service-create.component';
import { ServiceProviderDetailsComponent } from './components/service-provider-component/service-provider-details/service-provider-details.component';
import { ServiceProviderCreateComponent } from './components/service-provider-component/service-provider-create/service-provider-create.component';
import { ServiceProviderUpdateComponent } from './components/service-provider-component/service-provider-update/service-provider-update.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    ServiceListComponent,
    HomeComponent,
    ServiceProviderListComponent,
    ServiceDetailsComponent,
    ServiceUpdateComponent,
    ServiceCreateComponent,
    ServiceProviderDetailsComponent,
    ServiceProviderCreateComponent,
    ServiceProviderUpdateComponent,
    SearchComponent
    
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
