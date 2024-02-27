import { WebSiteService } from '../models/WebSiteService.model';

export interface WebSiteServiceProvider {
    id?: number;
    name: string;
    services: WebSiteService[];
  }
  
  export class WebSiteServiceProvider implements WebSiteServiceProvider {
    constructor(
      public name: string,
      public services: WebSiteService[],
      public id?: number,
    ) {}
  }