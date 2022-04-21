import { CartUtil } from './../../../ults/cart.util';
import { Product } from './../../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  addToCart() {
    CartUtil.add(this.product._id, this.product.title, 1, this.product.price, this.product.images[0]);
    this.toaster.success(`${this.product.title} adicionado ao carrinho`, "Produto Adicionado");
  }
}
