import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() msgfromparent!:string
  msgfromchild="i will work hard"
  @Output() getmsgfromchild:EventEmitter<string>=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
   onmsgsend(){
      this.getmsgfromchild.emit("i will work hard")
   }
}
