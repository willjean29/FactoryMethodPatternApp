import {AbstractProduct} from '../interfaces/AbstractProduct';
import Productos from '../models/Productos';

export class ConcreteProductPOSTGRELSQL implements AbstractProduct {
  createProduct = (param?: any) => {
      return new Productos();
  }
}