import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {}
  getProduct() {
    return this.http.get<Product[]>(this.url);
  }
  //C'EST UNE METHODE PARAMETRé ELLE PREND LOBJET DE TYPE PRODUCT 
  postProduct(p: Product) {
    return this.http.post(this.url,  p);
  }
}
