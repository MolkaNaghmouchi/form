import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  numb!: number;
  listProduct!: Product[];
  constructor(private serviceCal: CalculService) {}

  ngOnInit(): void {
    this.listProduct = [
      { id: 1, title: 't-shirt1', price: 20, quantity: 9, like: 0 },
      { id: 2, title: 'task2', price: 40, quantity: 0, like: 0 },
      { id: 3, title: 'task3', price: 20, quantity: 0, like: 0 },
      { id: 4, title: 'task4', price: 10, quantity: 0, like: 0 },
    ];
  }
  // getProduct(){
  //this.numb=this.serviceCal.getNumberOf(this.listProduct,critiria:'quantity' , value:0);
  // }
}
