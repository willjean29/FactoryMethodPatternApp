import {AbstractProduct} from '../interfaces/AbstractProduct';
import {ConcreteProductMYSQL} from '../models/ConcreteProductMYSQL';
import {ConcreteProductPOSTGRELSQL} from '../models/ConcreteProductPOSTGRELSQL';

export class ProductFactory implements AbstractProduct{
    createProduct(type: string){
        if (type === "M") {
            return new ConcreteProductMYSQL();
        } else if (type === "P") {
            return new ConcreteProductPOSTGRELSQL();
        }
    }
}