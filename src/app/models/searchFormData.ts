export class SearchFormData {
    selectedOption: string;
    searchInput: string;
  
    constructor(selectedOption: string, searchInput: string) {
      this.selectedOption = selectedOption;
      this.searchInput = searchInput;
    }
  }