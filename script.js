let resp =""
let total = 0;
let contador = 0;
let isfinished = false;


const Productos=[{
  id:1,
  marca:"Nike",
  tipo:"Manga Corta",
  talle:"M",
  nombre:"Remera",
  precio:2000
  },
  {
    id:2,
    marca:"Generica",
    tipo:"Camisa",
    talle:"M",
    nombre:"Remera",
    precio: 3000
  },
  {
    id:3,
    marca:"Honda",
    tipo:"Musculosa",
    talle:"L",
    nombre:"Remera",
    precio: 1500
  },
  {
    id:4,
    marca:"Oggi",
    tipo:"Jean",
    talle:"L",
    nombre:"Pantalones",
    precio:2000
  },
  {
    id:5,
    marca:"Adidas",
    tipo:"Deportivo",
    talle:"XL",
    nombre:"Pantalones",
    precio: 4000
  },
  {
    id:6,
    marca:"Quiksilver",
    tipo:"jogging",
    talle:"L",
    nombre:"Pantalones",
    precio: 3500
  },
  {
    id:7,
    marca:"Snocks",
    tipo:"Boxer",
    talle:"L",
    nombre:"ropainterior",
    precio:1000
  },
  {
    id:8,
    marca:"Calvin Klein",
    tipo:"Braga",
    talle:"M",
    nombre:"ropainterior",
    precio: 700
  },
  {
    id:9,
    marca:"Adidas",
    tipo:"Running",
    talle:"40",
    nombre:"zapatos",
    precio:5000
  },
    {
      id:10,
      marca:"Topper",
      tipo:"Salir",
      talle:"29",
      nombre:"zapatos",
      precio: 4000
  },
  {
    id:11,
    marca:"Nike",
    tipo:"Todo tipo",
    talle:"40,41,42",
    nombre:"zapatos",
    precio: 6000
}];

function filtrarprecio(preciomax){
  const filtrados = Productos.filter((Producto)=>Producto.precio<=preciomax);
  return filtrados;
}

let preciousuario=parseFloat(prompt("Ingresa el precio que puedas abonar. Salir(0)"));

while(preciousuario!=0){
  if(isNaN(preciousuario)||preciousuario<0){
    alert("Ingrse un numero que sea valido");
  }
  else{
    const productosfiltadtos = filtrarprecio(preciousuario);
    console.table(productosfiltadtos);
  }
  preciousuario=parseFloat(prompt("Ingresar el precio que puedas abonar. Salir(0)"));
}

// while(isfinished==false){

//   let id = prompt('Ingrese el codigo del producto que quiera comprar: 1.Remera 2.Pantalones 3.Ropa interior 4.Zapatos');

//   switch(id){
//     case '1':
    
 
   
      
//     total=total+1000;
//     contador = contador+1;
//     alert("compra existosa");
//     break;

//     case '2':
//     total=total+1300;
//     contador = contador+1;
//     alert("compra existosa");
//     break;

//     case '3':
//     total=total+500;
//     contador = contador+1;
//     alert("compra existosa");
//     break;

//     case '4':
//     total=total+2000;
//     contador = contador+1;
//     alert("compra existosa");
//     break;

//     default:
//     alert('Opcion no valida');
//     break;
//   }

//   resp = prompt("Comprar otro producto?");
//   if(resp == "No"|| resp =="NO" || resp =="no"){
//     isfinished=true;
//   }
// }

// function calculardesc(){
// total=total*0.70;
// }

// if(contador>=3){
//   alert("Debido a que compro mas de 3 productos se le aplicara un descuento del 30%!");
//   calculardesc(total);
//   alert("Su precio final es:"+" "+total);
// }
// else{
//   alert("Su precio final es:"+" "+total);
// }