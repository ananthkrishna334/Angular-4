import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input() 
  dropdown:any;

  @Output()
  dropdownChangeEvent:EventEmitter<any>;
  constructor() { 

    this.dropdown = {
      label:"dropdown",
      data:[{text:"Please Select", value:""}],
      selectedValue:""
    };
    this.dropdownChangeEvent = new EventEmitter<any>();
  }
  dropdownChange(){
    this.dropdownChangeEvent.emit(this.dropdown.selectedValue);
  }
  ngOnInit() {
  }

}
