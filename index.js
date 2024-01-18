// html semantico
// botones -> button.
// Sobre-explotemos el uso de la etiqueta div

// Basico de JS
// Basico del dominio o manipulación DOM
// Document Object Model

// Seleccionar un elemento a través de un Query
// Este es un query de identificador getElementById
// const clearButton = document.getElementById("C");
// console.log(clearButton);

// // getElementsByClassName
// const calc = document.getElementsByClassName("calc");
// console.log(calc);

// // Este sería un query de elementos - querySelectorAll
// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// selectores
// . -> clase
// # -> id
// espacio vacio -> elemento descendiente

// querySelector - Específico
// const multiplyButton = document.querySelector("#multiply");
// console.log(multiplyButton);

// variables/constantes
let valor1 = 0;
let valor2 = 0;
let operacion = "";

// selector del input de resultado
const result = document.querySelector(".result input");

// selector de botón de número
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
console.log(seven);

// selector de boton de Operaciones

const plusButton = document.getElementById("plus");             // suma
const minusButton = document.getElementById("minus");           // resta
const multiplyButton = document.getElementById("multiply");     // Multiplicacion
const divisionButton = document.getElementById("division");     // Division
const percentageButton = document.getElementById("percentage"); // Porcentake
const cButton = document.getElementById("C");


// añadir monitores de eventos / Event Listeners a los elementos de Numeros
 
one.addEventListener("click", function () {
  concatenar(one);
});
two.addEventListener("click", function () {
  concatenar(two);
});
three.addEventListener("click", function () {
  concatenar(three);
});
four.addEventListener("click", function () {
  concatenar(four);
});
five.addEventListener("click", function () {
  concatenar(five);
});
six.addEventListener("click", function() {
  concatenar(six);
});
seven.addEventListener("click", function () {
  concatenar(seven);
});
// cuando pasamos parámetros a la función callback
// necesitamos envolver nuestra función en una función anónima
eight.addEventListener("click", function () {
  concatenar(eight);
});
// cuando pasamos parámetros a la función callback
// necesitamos envolver nuestra función en una función anónima
nine.addEventListener("click", function () {
  concatenar(nine);
});
zero.addEventListener("click", function() {
  concatenar(zero);
});

function concatenar(boton) {
  // si el primer valor es 0
  // asignamos a valor1
  // if (!valor1) {
  //   result.value += boton.innerText;
  //   valor1 = Number(result.value);
  // }
  // // si es diferente de 0
  // // asignamos a valor2
  // else {
  //   if (result.value != 0) {
  //     result.value += boton.innerText;
  //   } else {
  //     result.value = boton.innerText;
  //   }
  //   valor2 = Number(result.value);
  // }

  if (operacion == "") {
    result.value += boton.innerText;
    valor1 = Number(result.value);
  } else {
    result.value = result.value
      ? result.value + boton.innerText
      : boton.innerText;
    valor2 = Number(result.value);
  }

}

// Event Listeners a los elementos de Operaciones
// SUMA
plusButton.addEventListener("click", function () {
  operacion = "SUMA";
  result.value = "0";
});
// RESTA
minusButton.addEventListener("click", function () {
  operacion = "RESTA";
  result.value = "0";
} );
// Multiplicacion
multiplyButton.addEventListener("click", function(){
  operacion = "MULTI";
  result.value = "0";
});
// Division
divisionButton.addEventListener("click", function() {
  operacion = "DIVISION";
  result.value = 0;
});
// Porcentaje
percentageButton.addEventListener("click", function (){
  result.value = valor1 / 100;
  valor1 = Number(result.value);
});
cButton.addEventListener("click", function (){
  valor1 = 0;
  result.value = 0;
  
});

// calcular resultado con el botón de igual
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function () {
  switch (operacion) {
    case "SUMA":
      result.value = valor1 + valor2;
       break;
    case "RESTA":
      result.value = valor1 - valor2;
      break;
    case "MULTI":
      result.value = valor1 * valor2;
      break;
    case "DIVISION":
      result.value = valor1 / valor2;
      break;
    case "PORCENTAJE":
      break;
  }
  valor1 = Number(result.value);
  valor2 = 0;
  operacion = "";
});
