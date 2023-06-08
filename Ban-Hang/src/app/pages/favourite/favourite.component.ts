import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/service/add-to-cart.service';
import { FavouriteService } from 'src/app/service/favourite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  favourites!: any[]
  carts: any = this.cartService.getToCart()
  favourite: any = this.favouriteService.getFavourite()
  index!: any
  constructor(
    private favouriteService: FavouriteService,
    private cartService: AddToCartService,
  ) {
    this.favourites = this.favouriteService.getFavourite()
  }

  formatCurrency(value: number): string {
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });
    return formatter.format(value);
  }

  addToCart(item: any) {
    this.index = this.carts.findIndex((i: any) => {
      return i._id === item._id
    })
    if (this.index >= 0) {
      this.carts[parseInt(this.index)].quantity += 1
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

  removeFavourite(i: number) {
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
        this.favourites.splice(i, 1)
        Swal.fire(
          'Deleted!',
          'Sản phẩm đã được xóa',
          'success'
        )
        this.favourite.saveFavourite(this.favourites)

      }
    })
  }

  clearFavourite() {
    Swal.fire({
      title: 'Delete All?',
      text: "Bạn chắc là muốn xóa tất cả chứ ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.favourites = []
        Swal.fire(
          'Deleted!',
          'Sản phẩm đã được xóa',
          'success'
        )
      }
    })

  }

}
