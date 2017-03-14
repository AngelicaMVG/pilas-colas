var nombre = [ "Anna", "Angie","Juan", "Paola", "Sergio"];
var apellido = ["Prado", "Velazquez","Garcia", "Arreola", "Gomez"];


var nombres =[];
function nombreStack(nombre, apellido){
for(i=nombre.length - 1; i>= 0 ; i--){

  nombres.push(nombre[i] + " " + apellido [i]);

}
return nombres;
}
console.log(nombreStack(nombre, apellido));
