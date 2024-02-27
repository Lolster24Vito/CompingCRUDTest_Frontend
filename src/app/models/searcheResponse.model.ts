import { WebSiteService } from "./WebSiteService.model";
import { WebSiteServiceProvider } from "./WebSiteServiceProvider.model";

export interface SearchResponse {
    services: WebSiteService[];
    providers: WebSiteServiceProvider[];
  }
  export class SearchResponse {
    services: WebSiteService[];
    providers: WebSiteServiceProvider[];
  
    constructor(services: WebSiteService[], providers: WebSiteServiceProvider[]) {
      this.services = services;
      this.providers = providers;
    }
  }