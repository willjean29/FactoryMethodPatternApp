import {connect} from '../db/db';
import {OperationsDB} from '../interfaces/OperationsDB';
class Products implements OperationsDB{
  async getProductsAll(){
    try {
      const conn = await connect();
      const result = await conn.query("SELECT * FROM Productos");
      return result[0];
    } catch (error) {
      return error.message;
    }
  }

  async insertProduct(product:any){
    const {nombre,precio,tipo,presentacion} = product;
    try {
      const conn = await connect();
      const result = await conn.query("insert into Productos(nombre, precio, tipo, presentacion) values(?,?,?,?)",[nombre,precio,tipo,presentacion]);
      return result[0];
    } catch (error) {
      return error.message;
    }

  }
}

export default Products;