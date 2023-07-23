let resp =""
let total = 0;
let contador = 0;
let isfinished = false;


const remeras=[{
  id:1,
  marca:"Nike",
  tipo:"Manga Corta",
  talle:"M",
  precio:2000
},
  {
    id:2,
    marca:"Generica",
    tipo:"Camisa",
    talle:"M",
    precio: 3000
  },

  {
    id:3,
    marca:"Honda",
    tipo:"Musculosa",
    talle:"L",
    precio: 1500
}]

const Pantalones=[{
  id:1,
  marca:"Oggi",
  tipo:"Jean",
  talle:"L",
  precio:2000
},
  {
    id:2,
    marca:"Adidas",
    tipo:"Deportivo",
    talle:"XL",
    precio: 4000
  },

  {
    id:3,
    marca:"Quiksilver",
    tipo:"jogging",
    talle:"L",
    precio: 3500
}]

const Ropainterior=[{
  id:1,
  marca:"Snocks",
  tipo:"Boxer",
  talle:"L",
  precio:1000
},
  {
    id:2,
    marca:"Calvin Klein",
    tipo:"Braga",
    talle:"M",
    precio: 700
}]

const Zapatos=[{
  id:1,
  marca:"Adidas",
  tipo:"Running",
  talle:"40",
  precio:5000
},
  {
    id:2,
    marca:"Topper",
    tipo:"Salir",
    talle:"29",
    precio: 4000
},
{
  id:2,
  marca:"Nike",
  tipo:"Todo tipo",
  talle:"40,41,42",
  precio: 6000
}]



// while(isfinished==false){

//   let id = prompt('Ingrese el codigo del producto que quiera comprar: 1.Remera 2.Pantalones 3.Ropa interior 4.Zapatos');

//   switch(id){
//     case '1':
//       let idr = prompt('Ingrese el modelo de remera que quiera comprar: 1.Remera manga corta 2.Camisa 3.Musculosa');

//       switch(idr){
//         case "1":
//           total=total+remera1.precio
//           contador=contador+1;
//           alert("se ha añadido al carro");
//         break;

//         case "2":
//           total=total+remera2.precio
//           contador=contador+1;
//           alert("se ha añadido al carro");
//         break;

//         case "3":
//           total=total+remera3.precio
//           contador=contador+1;
//           alert("se ha añadido al carro");
//         break;
//       }
      
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