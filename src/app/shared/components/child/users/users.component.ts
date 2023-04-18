import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/shared/models/post';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  
 @Input() usersinfo!:Iuser
  constructor() { }

  ngOnInit(): void {
   console.log(this.usersinfo)
  }

}
