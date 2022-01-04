console.log(miNombre);

var miNombre = "Eduardo";

hey();

function hey() {
    console.log("Hola " + miNombre)
}

// las variables y las funciones se procesan antes de ejecutar cualquier codigo y ahi se genera el hoisting, pero las funciones se declaran antes que las variables. Si mandamos llamar una funcion antes de declararla vamos a obtener el resultado que esperamos, siempre y cuando la variables esten declaradas e inicializadas antes de mandar a llamar esa funcion..... todas las funciones deben ser declaradas al principio del codigo