import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ProductsComponent {

  productList : any[] = [];;

  constructor(public http : HttpClient) {
    
    
  }
  ngOnInit(): void {
    this.fetchProducts(); 
  }
  fetchProducts() {
    this.http.get('https://fakestoreapi.com/products').subscribe((resp: any) => {
      this.productList = resp.map((product: any) => ({
        ...product,
        shortDescription: product.description.slice(0, 100),  // Adjust the number for the desired short description length
        showFullDescription: false
      }));
    });
  }

  toggleDescription(product: any) {
    product.showFullDescription = !product.showFullDescription;
  }

}
