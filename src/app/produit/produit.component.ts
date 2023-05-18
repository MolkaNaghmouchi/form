import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  product!: Product;
  listProduct!: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.product= new Product();
    this.productService
      .getProduct()
      .subscribe((data: Product[]) => (this.listProduct = data));
  }

  ///on utilise subscribe car le retour de cette methode est un list d'observableeeeeee
  Save() {
    this.productService.postProduct(this.product).subscribe( ()=> this.listProduct=[this.product , ...this.listProduct] );
  }
}
///pour installer json-sever
//npm i -g json-server
//bch nemchi nasnaa3 ay dossier bch nsaamih  baackend w naamel lcommande hedhi pour lancer apres linstallation : json-server db.json --watch
