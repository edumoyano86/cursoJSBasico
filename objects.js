var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function (){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// Para mandar a llamar el objeto es 

miAuto

// y para poder acceder a los valores de un objeto

miAuto.marca

// para poder acceder al metodo de la funcion es:

miAuto.detalleDelAuto();


// FUNCION CONTRUCTORA

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

autoNuevo

var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla",  2020);