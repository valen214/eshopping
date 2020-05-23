import { Injectable } from '@angular/core';


export class Review
{
  constructor(
    public name: String,
    public rating: number,
    public review: String,
  ){}
}

const PRODUCT_CACHE = {

}

function randomstring(length){
  return crypto.getRandomValues(new Uint8Array(length)).reduce((l, r) => (
  l + "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
      Math.trunc(r * 62 / 256) // String.prototype.charAt() works too
  ]), "");
};

export class Product
{
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description?: string,
    public thumbnail?: ImageBitmap | string,
    public images?: ImageBitmap[] | string[],
    public reviews?: Review[],
  ){
    if(!this.id){
      this.id = randomstring(6);
    }
    PRODUCT_CACHE[this.id] = this;
  }
}

/*
https://pixabay.com/photos/strawberries-red-fruit-sweet-ripe-5140640/
https://pixabay.com/photos/raspberries-blueberry-fruit-food-5163812/
*/
const PRODUCTS_DATA = [
  new Product(
      "0", "Product 1", 1234, null,
      "https://cdn.pixabay.com/photo/2020/05/04/13/42/sardine-5129230_1280.jpg",
  ),
  new Product(
      "1", "Product 2", 4231, null, "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_1280.jpg"),
  new Product(
      "AGBEDSS", "Product 3", 1221,
      "Want some fresh, juicy fruits? We have strawberries!",
      "https://cdn.pixabay.com/photo/2020/05/07/08/21/strawberries-5140640_1280.jpg",
      [
        "https://cdn.pixabay.com/photo/2020/05/07/08/21/strawberries-5140640_1280.jpg",
        "https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/22/17/24/strawberry-5079237_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/04/27/00/46/strawberries-4159028_1280.jpg",
      ]
  ),
];


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  getProductById(productId: string): Product {
    return PRODUCT_CACHE[productId];
  }

  constructor(){}

  getProductList(): Product[] {
    return Object.values(PRODUCT_CACHE);
  }
}
