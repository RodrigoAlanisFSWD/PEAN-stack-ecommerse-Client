import { Component, OnInit } from '@angular/core';
import { ProductService } from '../core/services/product.service';
import { Product } from '../core/models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../core/models/Category';
import { CategoryService } from '../core/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]
  categories: Category[]
  form: FormGroup

  constructor(
    private _service: ProductService,
    private _fb: FormBuilder,
    private _category: CategoryService
  ) {
    this.products = [];
    this.categories = [];
    this.init();
    this.form = _fb.group({
      "search": ["",Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(txt: string): void {
    this._service.search(txt).subscribe(
      res => {
        if (res.res) {
          this.products = res.data
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  init() {
    this._service.getAll().subscribe(
      res => {
        this.products = res.data
      },
      err => {
        console.log(err);
      }
    )

    this._category.getAll().subscribe(
      res => {
        this.categories = res.data
      },
      err => {
        console.log(err);
      }
    )
  }

  filter(e: any) {
    this._category.getPds(e.target.value).subscribe(
      res => {
        console.log(res.data.Product);
        this.products = res.data
      },
      err => {
        console.log(err);
      }
    )
  }

}
