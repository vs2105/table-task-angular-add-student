import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../models/post';

@Component({
  selector: 'app-std-form2',
  templateUrl: './std-form2.component.html',
  styleUrls: ['./std-form2.component.scss']
})
export class StdForm2Component implements OnInit {
  fnamevalue!:string;
  lnamevalue!:string;
  emailvalue!:string;
  contactvalue!:string;
  @Output() addstdinfo2:EventEmitter<Istd>=new EventEmitter<Istd>();
  @ViewChild ("fnameVal") fnameele!:ElementRef
  @ViewChild("lnameVal") lnameele!:ElementRef
  @ViewChild("emailVal") emailele!:ElementRef
  @ViewChild("contactVal") contactele!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }


  onaddstudent(){
  //  console.log (this.fnameele.nativeElement.value)
  let obj3:Istd={
     fname:this.fnameele.nativeElement.value,
     lname:this.lnameele.nativeElement.value,
     email:this.emailele.nativeElement.value,
     contact:+this.contactele.nativeElement.value,

  }
  this.fnameele.nativeElement.value=""
  this.lnameele.nativeElement.value=""
  this.emailele.nativeElement.value=""
  this.contactele.nativeElement.value=""
  
  console.log(obj3)
  this.addstdinfo2.emit(obj3)
  }
}
