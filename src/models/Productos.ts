import { getConnection, Client } from '../db/db2';
import {OperationsDB} from '../interfaces/OperationsDB';
class Productos implements OperationsDB{
  async getProductsAll(){
    let client = await getConnection();
    let query = "SELECT * FROM Productos";
    let params:any[] = [];
    let rs = await client.query(query,params);
    client.release(true);
    return rs.rows;
  }

  async insertProduct(product:any){
    const {nombre,precio,tipo,presentacion} = product;
    let client = await getConnection();
    let query = "insert into Productos(nombre, precio, tipo, presentacion) values($1,$2,$3,$4)";
    let params = [nombre,precio,tipo,presentacion];
    let rs = await client.query(query,params);
    client.release(true);
    return rs;
  }
}

export default Productos;