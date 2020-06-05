import { Review } from './Review';


function randomstring(length,
    dict="abcdefghijklmnopqrstuvwxyz" +
         "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"){
  return crypto.getRandomValues(
      new Uint8Array(length)
    ).reduce((l, r) => (
      l + dict[ Math.trunc(r * dict.length / 256) ]
    ), ""
  );
  // String.prototype.charAt() works too as it also takes non-int
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
    Product.CACHED_PRODUCT[this.id] = this;
  }

  static CACHED_PRODUCT = {

  }
  static cache(product: Product){
    Product.CACHED_PRODUCT[product.id] = product;
  }
}