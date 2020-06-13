import { Review } from './Review';
import { randomstring } from 'src/util';



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
  }
}