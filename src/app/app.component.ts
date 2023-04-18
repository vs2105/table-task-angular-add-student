import { Component } from '@angular/core';
import { Ipost, Istd, Iuser } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productname:string="samsung s22"
  title = 'i love javascript';
  msgforchild: string ="work hard party hard"
  personname:string="jhon"
  msgfromchild!:string
  productstatus!:string
  postsinfo:Array<Ipost>=[
    {
      title:"Angular 15 Sandalone Components",
      body:"Angular 15 has new feature Sandalone Components"
    },
    {
      title:"Angular 15 Sandalone HttpModule",
      body:"Angular 15 has new feature Sandalone HttpModule"
    },
    {
      title:"Angular 16 Signals",
      body:"Angular 15 has new feature signals alternative for Rxjs subject"
    }
  ]
  usersinfo:Array<Iuser>=[
    {
     fname:"Jhon",
     lname:"Doe",
     jobprofile:" jhon Doe is an front-end-engineer",
    },
    {
      fname:"Jen",
      lname:"Doe",
      jobprofile:" Jen Doe is an a Angular-developer"
     },
     {
      fname:"May",
      lname:"Doe",
      jobprofile:"May Doe is an backend-developer"
     }
  ]
  stdArray:Array<Istd>=[
    {
      fname:"jhon",
      lname:"doe",
      email:"jd@gmail.com",
      contact:12345
  }
]
  stdarray2:Array<Istd>=[
    {
      fname:"May",
      lname:"doe",
      email:"md@gmail.com",
      contact:12345
  }
  ]
  stdarray3:Array<Istd>=[
    {
      fname:"jen",
      lname:"doe",
      email:"md@gmail.com",
      contact:12345
  }
  ]

  onmsgchild(e : string){
     this.msgfromchild=e
  }
  updatestatus(stat:any){
    console.log(stat)
    this.productstatus=stat
  }
  onstdadd(std :Istd){
    // console.log(std)
    this.stdArray.push(std)
  }
 
  onstudentadded(student:Istd){
   console.log(student)
   this.stdarray2.push(student)
  }
  onstdadded(student1:Istd){
  //  console.log(student1)
  this.stdarray3.push(student1)
  }
}
