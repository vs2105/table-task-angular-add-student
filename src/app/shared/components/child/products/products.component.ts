import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 @Input() getproductname!:string
 productstatus:string="the product is deleiverd..."
 @Output() getProductstatus:EventEmitter<string> = new EventEmitter<string>()
  constructor() { }
  
  ngOnInit(): void {
  }
   
  OnstatusUpdate(){
    this.getProductstatus.emit(this.productstatus)
  }
  
 
}
