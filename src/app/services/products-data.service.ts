import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Review } from './Review';





/*
https://pixabay.com/photos/strawberries-red-fruit-sweet-ripe-5140640/
https://pixabay.com/photos/raspberries-blueberry-fruit-food-5163812/
*/
export const PRODUCTS_DATA = [
  new Product({
      id: "0",
      name: "Product 1",
      price: 1234,
      thumbnail: "https://cdn.pixabay.com/photo/2020/05/04/13/42/sardine-5129230_1280.jpg",
      tags: ["fish"],
  }),
  new Product({
      id: "1",
      name: "Product 2",
      price: 4231,
      thumbnail: "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_1280.jpg",
      tags: ["fruits"]
  }),
  new Product({
      id: "AGBEDSS",
      name: "Product 3",
      price: 1221,
      description: "Want some fresh, juicy fruits? We have strawberries!",
      thumbnail: "https://cdn.pixabay.com/photo/2020/05/07/08/21/strawberries-5140640_1280.jpg",
      images: [
        "https://cdn.pixabay.com/photo/2020/05/07/08/21/strawberries-5140640_1280.jpg",
        "https://cdn.pixabay.com/photo/2013/04/02/21/47/strawberries-99551_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/04/22/17/24/strawberry-5079237_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/04/27/00/46/strawberries-4159028_1280.jpg",
      ],
      tags: ["fruits"]
    }),
];


@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  addProduct(info?: Omit<Partial<Product>, "id">){
    let product = new Product(info);
    Product.cache(product);
    return product.id;
  }

  setProductInfo(
      id: string | Product,
      info: Omit<Partial<Product>, "id">){
    let obj: Product;
    if(typeof id === "string"){
      obj = this.getProductById(id);
    } else{
      obj = id;
    }

    Object.assign(obj, info);
  }

  getProductById(productId: string): Product {
    return Product.CACHED_PRODUCT[productId];
  }

  constructor(){}

  getProductList(): Product[] {
    return Object.values(Product.CACHED_PRODUCT);
  }
}
