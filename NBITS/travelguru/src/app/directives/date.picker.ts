import {Directive,ElementRef,HostListener,Input} from '@angular/core';
declare var $;
@Directive({
    selector:"[datepicker]"
})
export class DatePickerDirective{
  constructor(private ele:ElementRef){
      console.log(ele.nativeElement)
      $(ele.nativeElement).datepicker();
  }
  @Input()
  RestrictExpression:any;
  @HostListener('keypress',['$event'])
  onKeyPress(evt){
    
  }
}