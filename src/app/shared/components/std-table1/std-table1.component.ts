import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/post';

@Component({
  selector: 'app-std-table1',
  templateUrl: './std-table1.component.html',
  styleUrls: ['./std-table1.component.scss']
})
export class StdTable1Component implements OnInit {
  @Input() studentinfo !: Array<Istd>
  constructor() { }

  ngOnInit(): void {
    console.log(this.studentinfo)
  }

}
