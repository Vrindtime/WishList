import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Output() filter_data  = new EventEmitter<string>();
  //he want to pass a function?

  itemFilter : String = '1';

  changeFilter(value:any){
    console.log("changeFilter:"+value);
    this.filter_data.emit(value);
  }

}
