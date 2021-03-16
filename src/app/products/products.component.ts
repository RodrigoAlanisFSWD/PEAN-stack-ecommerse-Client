import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]

  constructor(
    private _service: ProductService
  ) {
    this.products = []
    this._service.getAll().subscribe(
      res => {
        console.log(res.data);
        this.products = res.data
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

}
