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
  public id: string
  public name: string
  public price: number
  public description?: string
  public thumbnail?: ImageBitmap | string
  public images?: ImageBitmap[] | string[]
  public reviews?: Review[]
  public tags?: string[]
  constructor(obj: Partial<Product>){
    Object.assign(this, obj);
    if(!this.id){
      this.id = randomstring(6);
    }
    Product.cache(this);
  }

  static CACHED_PRODUCT = {

  }
  static cache(product: Product){
    Product.CACHED_PRODUCT[product.id] = product;
  }
}