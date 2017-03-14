var nombre = [ "Anna", "Angie","Juan", "Paola", "Sergio"];
var apellido = ["Prado", "Velazquez","Garcia", "Arreola", "Gomez"];


var nombres =[];
function nombreCompleto (nombre, apellido){
for(var i = 0; i <= 5 ; i++){

  nombres.push(nombre[i] + " " + apellido [i]);

}
return nombres;
}
console.log(nombreCompleto(nombre, apellido));
