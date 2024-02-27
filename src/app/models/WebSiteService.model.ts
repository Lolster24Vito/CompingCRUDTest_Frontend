import { WebSiteServiceProvider } from '../models/WebSiteServiceProvider.model';


export interface WebSiteService {
    id?: number;
    descriptionService: string;
    providers: WebSiteServiceProvider[];
  }
  
  export class WebSiteService implements WebSiteService {
    
    constructor(
      public descriptionService: string,
      public providers: WebSiteServiceProvider[],
      public id?: number
    ) {}

  }