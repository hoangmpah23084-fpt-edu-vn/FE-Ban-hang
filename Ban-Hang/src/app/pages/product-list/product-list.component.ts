import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((response: any) => {
      console.log(response.data)
      this.products = response.data
    }
    )
  }
  removeId(_id: any) {
    this.productService.deleteProduct(_id).subscribe(() => {
      this.products = this.products.filter(product => product._id !== _id)
    })
  }
}
