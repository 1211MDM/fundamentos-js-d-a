//document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";

/* Salidas de datos */
//window.alert(5+2);
console.log(6+2);

/* Declaracion */
let a,b,c;
a = 5;
b = 6;
c = a + b;

//window.alert(c);/* Forma 1 */
//document.getElementById("demo").innerHTML = c;/* Forma 2 */

/* Variables */
let p,q,r;
p  = 5;
q = 7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;

/* Tipos de datos */
let num = 24; // Numero entero
let name = "Luis Vejarano"; //Cadena
let km = 14.5;// Numero decimal
let isColombiano = true; // Booleano
let obj = {firstname : "ana", lastname : "Perez"}; // Objeto

let y = 17 + "POO";
let unir = "17" + "POO";
//window.alert(unir);
//window.alert(y);

/* Funciones */
function myFunction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}

