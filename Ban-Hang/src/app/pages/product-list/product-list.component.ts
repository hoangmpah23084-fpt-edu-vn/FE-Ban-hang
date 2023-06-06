import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products!: IProduct[]
  isShown: boolean = true
  searchValue: any
  
  
  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute ,
    ) {
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


  onSearch() {
    console.log(`product:`, this.searchValue)
    this.isShown = true;
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.data.filter((product: any) => {
        console.log(product.name.includes(this.searchValue));
        return product.name.toLowerCase().includes(this.searchValue == "" ? null : this.searchValue.toLowerCase())
      })
    })

  }


  onClickOutside() {
    this.isShown = false;
  }


  onClick(item: IProduct) {
    this.isShown = !this.isShown;
    this.router.navigate(['/product', item._id]).then(() => {
      window.location.reload();
    });
  }
}
