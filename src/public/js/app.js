
const formProduct = document.getElementById("form-product");
const tableBody = document.getElementById("table-body");
if(formProduct){
  console.log("existe");
  formProduct.addEventListener('submit',registrarProducto);
}

function registrarProducto(event){
  event.preventDefault();
  console.log("enviar")
  const data = new FormData(formProduct);
  const dataProduct = {
    nombre: data.get('nombre'),
    precio: parseFloat(data.get('precio')),
    tipo: data.get('tipo'),
    presentacion: data.get('presentacion'),
    db: data.get('db')
  }

  let url = '/products';
  fetch(url,{
    method: 'POST',
    body: JSON.stringify(dataProduct),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => resp.json())
  .then((response) => {
    if(response.ok){
      console.log(response);
      // reseteando la data
      tableBody.innerHTML = "";
      let products = response.productsDB;
      if(data.get('db') === "M"){
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Se registro en MYSQL',
          timer: 1500
        })
      }else{
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Se registro en PostgrelSQL',
          timer: 1500
        })
      }
      products.forEach(product => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
          <th scope="row">${product.id}</th>
          <td>${product.nombre}</td>
          <td>${product.precio}</td>
          <td>@${product.tipo}</td>
        `;
        tableBody.appendChild(tr);
      });
    }
  })
  .catch((error) => console.log("Error : ",error))
}