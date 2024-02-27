import { Component } from '@angular/core';
import { SearchResponse } from 'src/app/models/searcheResponse.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult!: SearchResponse;

  constructor(private dataService:DataService){
  }
  ngOnInit(): void {
    this.loadResponse();
      }

      loadResponse():void{
        this.searchResult= this.dataService.getSearchResults();
      }
}
