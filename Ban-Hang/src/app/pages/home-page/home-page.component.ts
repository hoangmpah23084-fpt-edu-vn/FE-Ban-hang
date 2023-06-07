import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { AddToCartService } from 'src/app/service/add-to-cart.service';
import { ProductService } from 'src/app/service/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products!: IProduct[]
  carts: any = this.cartService.getToCart()

  constructor(private productService: ProductService,
    private cartService: AddToCartService) {
    this.productService.getProducts().subscribe((response: any) => {
      this.products = response.data
      console.log(this.carts);

    }
    )

  }

  addToCart(item: any) {

    const index = this.carts.findIndex((i: any) => {
      return i._id === item._id
    })
    if (index >= 0) {
      this.carts[parseInt(index)].quantity += 1
    } else {
      const cartItem: any = {
        _id: item._id,
        name: item.name,
        images: item.images,
        price: item.priceSale ? item.priceSale : item.price,
        quantity: 1,
        subtotal: function () {
          return this.price * this.quantity
        }
      }
      this.carts.push(cartItem)
    }

    this.cartService.saveCart(this.carts)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Add to Cart success',
      showConfirmButton: false,
      timer: 1500
    })
  } 

  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });

    return formatter.format(value);
  }

}
