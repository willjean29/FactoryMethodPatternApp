import {AbstractProduct} from '../interfaces/AbstractProduct';
import Products from '../models/Products';
export class ConcreteProductMYSQL implements AbstractProduct {
  createProduct = (param?: any) => {
      return new Products();
  }
}