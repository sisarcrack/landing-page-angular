import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: IProduct[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productList = data;
    });
  }
}
