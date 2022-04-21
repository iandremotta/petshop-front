import { Product } from './../../../models/product.model';
import { DataService } from './../../../services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(public data: DataService) {
    this.products$ = this.data.getProducts();
  }

  ngOnInit(): void {
    console.log(this.products$);
  }

}
