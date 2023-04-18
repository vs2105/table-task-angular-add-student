import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../models/post';

@Component({
  selector: 'app-std-table2',
  templateUrl: './std-table2.component.html',
  styleUrls: ['./std-table2.component.scss']
})
export class StdTable2Component implements OnInit {
  @Input() stdInfo2!:Array<Istd>
  constructor() { }

  ngOnInit(): void {
    console.log(this.stdInfo2)
  }

}
