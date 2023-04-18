import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() postinfo!:Ipost
  constructor() { }

  ngOnInit(): void {
    console.log(this.postinfo)
  }

}
