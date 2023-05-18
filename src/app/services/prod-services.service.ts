import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdServicesService {
//pour on peut utiliser les methodes post/get/delete il faut implementer HtTPcLIENT
  constructor(private http:HttpClient) {}


addProd(data:any){
this.http.post('http://localhost:3000/products',data)
}

   }
