import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  @Input()
  all: number;

  @Input()
  inStock: number;

  @Input()
  outStock: number;

@Output()
  selectedFilterRadioButtonChanged: EventEmitter<string> = new EventEmitter<string>();
  selectedFilterRadioButton  : string =  'all';

  onSelectedFilterRadioButtonChanged(){
    console.log("inside onSelected");
    this.selectedFilterRadioButtonChanged.emit(this.selectedFilterRadioButton);
    console.log(this.selectedFilterRadioButton);
  }

}
