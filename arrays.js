var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas);    

// Para llamar el array

console.log(frutas.length);

// Para ver la longitud del array

console.log(frutas[0]);

// Para acceder al primer elemento

var masFrutas = frutas.push("Uvas");

// Para agregar otro elemento al array, lo agrega al final de la lista

var ultimmo = frutas.pop();

// Elimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift("Uvas")

// Agrega un elemento al comienzo del array

var borrarFruta = frutas.shift("")

// Va eliminar el primer elemento del array

var posicion = frutas.indexOf("Cereza");

// Me trae la posicion del elemento



// METODOS DE RECORRIDOS DE ARRAYS

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// para llamarlo a este filtrado

articulosFiltrados

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos


var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// el forEach a diferencia de todos los demas no me genera un nuevo array

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

articulosBaratos

// Para agregar elementos a un array

let numArray = [1, 2, 3, 4, 5]

function newNum() {
    numArray.push(6, 7)
    console.log(numArray)
}

newNum();

// Para eliminar el primer elemento de un array

let array = [1, 2, 3, 4, 5]

let shiftArray = array.shift()

console.log(array);

// Para eliminar el ultimo elemento de un array

let popArray = array.pop()

console.log(array);




