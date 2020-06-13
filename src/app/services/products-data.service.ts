import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Review } from './Review';

const LOCALSTORAGE_KEY = "eshopping-product-list";



/*
https://pixabay.com/photos/strawberries-red-fruit-sweet-ripe-5140640/
https://pixabay.com/photos/raspberries-blueberry-fruit-food-5163812/
*/
export const DEFAULT_PRODUCTS_DATA: Partial<Product>[] = [
  {
    id: "0",
    name: "Product 1",
    price: 1234,
    thumbnail: "https://cdn.pixabay.com/photo/2020/05/04/13/42/sardine-5129230_1280.jpg",
    tags: ["fish"],
  }, {
    id: "1",
    name: "Product 2",
    price: 4231,
    thumbnail: "https://cdn.pixabay.com/photo/2020/05/12/16/24/raspberries-5163812_1280.jpg",
    tags: ["fruits"]
  }, {
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
  },
];

function saveProductListToLocalStorage(list: Partial<Product>[]){
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(list));
}
function getProductListFromLocalStorage(){
  let begin = performance.now();

  let raw = localStorage.getItem(LOCALSTORAGE_KEY);
  let list: object[];
  let out: Product[];
  if(raw){
    list = JSON.parse(raw);
  } else{
    console.log("no products data in local storage,",
        "adding default data");
    list = addDefaultDataToLocalStorage();
  }
  out = list.map(v => new Product(v));

  let spent = performance.now() - begin;
  if(spent >= 1){
    console.log(`getProductListFromLocalStorage() spent:`,
        `${spent}ms`);
  }

  return out;
}
window["clearProductFromLocalStorage"] = function(){
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function addDefaultDataToLocalStorage(){
  saveProductListToLocalStorage(DEFAULT_PRODUCTS_DATA);
  return DEFAULT_PRODUCTS_DATA;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  addProduct(info?: Omit<Partial<Product>, "id">){
    let product = new Product(info);
    saveProductListToLocalStorage([
      ...this.getProductList(), product
    ])
    return product.id;
  }

  setProductInfo(
      arg1: string | Product,
      info: Omit<Partial<Product>, "id">){
    let id: string;
    if(typeof arg1 === "string"){
      id = arg1;
    } else{
      id = arg1.id;
    }

    saveProductListToLocalStorage(
        this.getProductList().map(v => {
          if(v.id === id){
            return Object.assign(v, info);
          }
          return v;
        }
    ))
  }

  getProductById(productId: string): Product {
    return this.getProductList().find(v => v.id === productId);
  }

  constructor(){}

  getProductList(): Product[] {
    return getProductListFromLocalStorage();
  }
}
