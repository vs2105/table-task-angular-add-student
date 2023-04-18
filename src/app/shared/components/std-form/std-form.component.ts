import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/post';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {
  fnameVal!:string;
  lnameVal!:string;
  emailVal!:string;
  contactVal!:string;
   @Output() addstdInfo:EventEmitter<Istd> = new EventEmitter<Istd>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onaddstudent(){
    let obj : Istd={
      fname:this.fnameVal,
      lname:this.lnameVal,
      email:this.emailVal,
      contact:+this.contactVal
    }
    // console.log(obj)
    
    console.log(obj);
    this.addstdInfo.emit(obj)
  }
  
}
