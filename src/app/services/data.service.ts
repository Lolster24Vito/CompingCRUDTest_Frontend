import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/searcheResponse.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchResults:SearchResponse={services:[],providers:[]};
  constructor() { }
  changeSearchResults(newResult:SearchResponse):void{
    console.log("inside change searchResults");
    this.searchResults=newResult;
  }
  getSearchResults():SearchResponse{
    console.log("inside get searchResults");
    return this.searchResults;
  }
}
