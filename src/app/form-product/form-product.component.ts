import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
  product!: Product;
  list!: Product[];
  constructor() {}

  ngOnInit(): void {
    this.product = new Product();
    this.list = [];
    console.log(this.list);
  }
  save() {
    this.product.like = 0;
    this.list.push(this.product);
    console.log('afterr the click');
    console.log(this.list);
  }
}
