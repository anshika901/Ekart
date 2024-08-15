import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent {
searchText: string ='';



@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

@ViewChild('searchInput') searchInputEl: ElementRef;
// onSearchTextChanged(){
//   this.searchTextChanged.emit(this.searchText);
// }

updateSearchText(){
  //this.searchText=event.target.value; 
  this.searchText=this.searchInputEl.nativeElement.value;
  this.searchTextChanged.emit(this.searchText);
}

}
