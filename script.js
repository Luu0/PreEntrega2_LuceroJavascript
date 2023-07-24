function filtrarprecio(preciomax){
  const filtrados = Productos.filter((Producto)=>Producto.precio<=preciomax);
  return filtrados;
}

let id = prompt('Ingrese como quiera ver los productos: 1.Filtrar por monto, 2.Menor precio a mayor, 3.Mayor precio a menor');

switch(id){

  case "1":
    let preciousuario=parseFloat(prompt("Ingresa el precio que puedas abonar. Salir(0)"));

    while(preciousuario!=0){
      if(isNaN(preciousuario)||preciousuario<0){
        alert("Ingrese un numero que sea valido");
      }
      else{
        const productosfiltadtos = filtrarprecio(preciousuario);
        console.table(productosfiltadtos);
      }
      preciousuario=parseFloat(prompt("Ingresar el precio que puedas abonar. Salir(0)"));
    }
  break;

  case "2":
    Productos.sort((a,b)=>a.precio-b.precio);
    console.table(Productos);
  break;

  case "3":
    Productos.sort((b,a)=>a.precio-b.precio);
    console.table(Productos);
  break;

  default:
    alert("Funcion no valida!");
  break;
}