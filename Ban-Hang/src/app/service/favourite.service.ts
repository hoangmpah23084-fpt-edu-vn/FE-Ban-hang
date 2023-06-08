import { Injectable } from '@angular/core';
import { HttpBackend } from '@angular/common/http';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor() { }

  getFavourite() {
    const cartJson = sessionStorage.getItem('favourites');

    if (cartJson) {
      return JSON.parse(cartJson)
    } else {
      return []
    }
  }

  saveFavourite(favourite: any) {
    const favouriteJson = JSON.stringify(favourite)
    sessionStorage.setItem('favourites', favouriteJson)
  }
}
