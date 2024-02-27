import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {faSearch,faHandHoldingDollar, faPeopleGroup,faClipboardQuestion, faCoffee, faHouse, faQuestion, faShield, faUser,faSignOut, faRankingStar, faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import { SearchFormData } from 'src/app/models/searchFormData';
import { DataService } from 'src/app/services/data.service';
import { SearchService } from 'src/app/services/search-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  protected readonly faCoffee = faCoffee;
  protected readonly faHouse = faHouse;
  protected readonly faShield = faShield;
  protected readonly faQuestion = faQuestion;
  protected readonly faClipboardQuestion = faClipboardQuestion;
  protected readonly faUser = faUser;
  protected readonly faSignOut = faSignOut;
  protected readonly faRankingStar=faRankingStar;
  protected readonly faRightToBracket=faRightToBracket;
  protected readonly faHandHoldingDollar=faHandHoldingDollar;
  protected readonly faPeopleGroup=faPeopleGroup;
  protected readonly faSearch=faSearch;

  searchForm!:FormGroup;
  
 

  constructor(
    private router:Router ,
    private searchService:SearchService,
    private formBuilder: FormBuilder,
    private dataService:DataService
    ){
    
  }
  ngOnInit():void{
    this.searchForm=this.formBuilder.group({
      selectedOption: ['0'],
      searchInput: ['']
     });
     
  }

  
  search() {
    let searchData=new SearchFormData(this.searchForm.value.selectedOption,this.searchForm.value.searchInput)
    this.searchService.getSearchResponse(searchData).subscribe(data=>{
      this.dataService.changeSearchResults(data);
      //this.router.navigate(['search']);

      //Needed a dummy route that doesnt do anything simply for reloading data 
      //while  searching on the /search url
      this.router.navigateByUrl('services', { skipLocationChange: true }).then(() => {
        this.router.navigate(['search']);
    });
    })
    
  }
}

