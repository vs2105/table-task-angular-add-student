import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/post';

@Component({
  selector: 'app-std-form1',
  templateUrl: './std-form1.component.html',
  styleUrls: ['./std-form1.component.scss']
})
export class StdForm1Component implements OnInit {
  
  fnamevalue!:string;
  lnamevalue!:string;
  emailvalue!:string;
  contactvalue!:string
  @Output() addstdinfo1:EventEmitter<Istd>=new EventEmitter<Istd>()

  constructor() { }

  ngOnInit(): void {
  }
  onaddstudent(fnamevalue:HTMLInputElement,lnamevalue:HTMLInputElement,emailvalue:HTMLInputElement,contactvalue:HTMLInputElement){
   let obj1:Istd={
    fname:fnamevalue.value,
    lname:lnamevalue.value,
    email:emailvalue.value,
    contact:+contactvalue.value
   }
    console.log(obj1)
    this.addstdinfo1.emit(obj1)
  }
}
