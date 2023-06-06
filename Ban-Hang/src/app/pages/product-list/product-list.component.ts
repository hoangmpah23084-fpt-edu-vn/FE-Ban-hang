import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Delete?',
      text: "Bạn chắc là muốn xóa chứ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(_id).subscribe(() => {
          this.products = this.products.filter(product => product._id !== _id)
        })
        Swal.fire(
          'Deleted!',
          'Sản phẩm đã được xóa',
          'success'
        )
      }
    })

  }
}
