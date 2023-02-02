// let nombre = prompt("ingrese su nombre: ");
// let mensaje = "hola " + nombre;
// alert(mensaje);

// document.write('<h1>Hola estoy escribiendo esto</h1>')


// console.log("controlando errores");

// nombre = prompt("ingrese su nobre: ");
// apellido = prompt("ingrese su apellido: ");
// edad = prompt("Ingrese su edad: ");

// alert("El nombre del usuario es" + " " + nombre + " " + apellido + "y tiene" + edad + "años");

// document.write("Su nombre es " + " " + nombre + " " + "apellido" + " " + apellido + " " + "y tiene" + " " + edad + " " + "años");



// let costosFijos = prompt ("Ingrese los Costos Fijos: ");
// let precioVenta = prompt ("Ingrese el previo de venta: " );
// let costosVariables = prompt ("Ingrese los costos variables: ");
// let puntoDeEquilibrio = costosFijos / (precioVenta - costosVariables );

// document.write (puntoDeEquilibrio);

// let edad = prompt("Ingrese su edad:" );
// let nombre = prompt("Ingrese su nombre:");
// if (edad == 18);

// alert( "hola" + " " + nombre + " " + "bienvenido");

// ifelse  (edad < 18);
// alert("Usted no debe estar aqui, vaya a mimir");

// var Edad = Number(prompt("Ingrese su edad"));

// if(Edad => 18) {
//     alert("Bienvenido/a");
// } else {
//     alert("Error");
// }

// var Usuario = Number(prompt("Nombre de usuario:"));
// var Clave = Number(prompt("Contraseña:"));

// if(Usuario == "admin" && Clave == "1234") {
//     alert("Bienvenido/a");
// } else {
//     alert("Error");
// }

// proyecto parte 2
// var respuesta = window.prompt('Cuál es su rol?');
// if(respuesta == 'admin'|| respuesta ==  'recursos'){

// var clave = prompt('Cual es su clave?')




// if(clave == 1234){


// var usuario = prompt('Cual es su nombre de usuario?')

 

  

// }

// }

// else { window.location.href = 'error.html'}








// document.querySelector('#header').innerHTML = '<h1> Hola ' + usuario + ' bienvenido a nuestra aplicación</h1>'


//parte 3 proyecto

// var respuesta = window.prompt('Cuál es su rol?');
// if(respuesta == 'admin'|| respuesta ==  'recursos'){

// var clave = prompt('Cual es su clave?')




// if(clave == 1234){


// var usuario = prompt('Cual es su nombre de usuario?')

 

  

// }

// }

// else { window.location.href = 'error.html'}








// document.querySelector('#header').innerHTML = '<h1> Hola ' + usuario + ' bienvenido a nuestra aplicación</h1>'

// var empleados = [{nombre: 'Juan', apellido : 'Pedro', edad: 40}, {nombre: 'Ana', apellido : 'García', edad: 25}, {nombre: 'Maria', apellido : 'Zarate', edad: 34}]



// mensaje = '<tr><th> Nombre </th><th>Apellido</th><th>Edad</th></tr>'
// for( i= 0;  i  < empleados.length; i++) {

// mensaje += '<tr><td>' + empleados[i].nombre + '<td>' + empleados[i].apellido + '</td><td>' + empleados[i].edad + '</td></tr>'


// }


// document.getElementById('caja').innerHTML += mensaje

// var FlujoDeCaja = [
//     {
//         periodo: "Enero",
//         ingresos: 1500,
//         egresos: 1500
//     },
//     {
//         periodo: "Febrero",
//         ingresos: 2500,
//         egresos: 2500
//     },
//     {
//         periodo: "Marzo",
//         ingresos: 84683,
//         egresos: 1155
//     },
//     {
//         periodo: "Abril",
//         ingresos: 135353,
//         egresos: 1533
//     },
//     {
//         periodo: "Mayo",
//         ingresos: 1535,
//         egresos: 5434
//     },
//     {
//         periodo: "Junio",
//         ingresos: 4343354,
//         egresos: 5434534
//     },
//     {
//         periodo: "Julio",
//         ingresos: 435453,
//         egresos: 4543
//     },
//     {
//         periodo: "Agosto",
//         ingresos: 78351,
//         egresos: 7816
//     },
//     {
//         periodo: "Septiembre",
//         ingresos: 1878,
//         egresos: 95634
//     },
//     {
//         periodo: "Octubre",
//         ingresos: 48483,
//         egresos: 9433
//     },
//     {
//         periodo: "Noviembre",
//         ingresos: 35483,
//         egresos: 53133
//     },
//     {
//         periodo: "Diciembre",
//         ingresos: 3843,
//         egresos: 348133
//     },
// ];

// var Ingresos = 0;
// var Egresos = 0;

// for (var i = 0; i < FlujoDeCaja.length; i++) {
//     var Actual = FlujoDeCaja[i];
//     Ingresos += Actual.ingresos;
//     Egresos += Actual.egresos;    
// }

// if(Ingresos < Egresos) {
//     alert("El flujo de caja genera pérdidas");
// } else {
//     alert("El flujo de caja no genera pérdidas");
// }


// var Ofertas = [
//     {
//         nombre: "Plan001",
//         capital: 150000,
//         plazo: 30,
// 	tasa: 0.15
//     },
//     {
//         nombre: "Plan002",
//         capital: 300000,
//         plazo: 180,
// 	tasa: 0.1
//     },
//     {
//         nombre: "Plan003",
//         capital: 485000,
// 	plazo: 60,
//         tasa: 0.23,
//     }
// ];

// var OfertasConInteres = [];

// for (var i = 0; i < FlujoDeCaja.length; i++) {
//     var Actual = Ofertas[i];
//     var Interes = (Actual.capital * Actual.plazo * Actual.tasa) / 100;
//     OfertasConInteres.push({
//         nombre: Actual.nombre,
//         capital: Actual.capital,
//         plazo: Actual.plazo,
// 	tasa: Actual.tasa,
// 	interes: Interes
//     });    
// }

// console.log(OfertasConInteres)


// function saludar(persona)
// {
// var saludo = "Buen dia " + persona;
// return saludo;
// }

// alert(saludar());


const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

let precioProducto = parseInt(prompt("ingrese el precio del producto:"));
let descuento = parseInt(prompt("ingrese el descuento"));

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
let mensaje = "El precio del producto es ${nuevoPrecio}";
alert(mensaje);