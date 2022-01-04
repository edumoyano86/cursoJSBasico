var numero = 1

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("soy un 100!");
        break;    
    default:
        console.log("No soy nada");
}

var stone = "Piedra";
var paper = "Papel";
var scissor = "Tijera";

var resultado = function (user, cpu) {
  switch (true) {
    case user === stone && cpu === scissor:
      console.log("El usuario gana, porque " + stone + " aplasta a " + scissor);
      break;
    case user === paper && cpu === stone:
      console.log(
        "El usuario gana, porque " + paper + " envuelve a la " + stone
      );
      break;
    case user === scissor && cpu === paper:
      console.log("El usuario gana, porque " + scissor + " corta al " + paper);
      break;
    case user === cpu:
      console.log("EMPATE");
      break;
    case user === stone && cpu === paper:
      console.log(
        "YOU LOSE!!, porque " + stone + " es envuelto por el  " + paper
      );
      break;
    case user === paper && cpu === scissor:
      console.log(
        "YOU LOSE!!, porque " + paper + " es destruido por la " + scissor
      );
      break;
    case user === scissor && cpu === stone:
      console.log(
        "YOU LOSE!!, porque " + scissor + " es aplastado por la " + rock
      );
      break;
    case user === cpu:
      console.log("EMPATE");
      break;
  }
};

resultado(stone, scissor);