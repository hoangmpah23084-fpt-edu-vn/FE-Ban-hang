import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((response: any) => {
      console.log(response.data)
      this.products = response.data
    }
    )

  }
  
}
