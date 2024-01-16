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
const seven = document.getElementById("seven");
console.log(seven);

// añadir monitores de eventos / Event Listeners a los elementos
seven.addEventListener("click", function () {
  concatenar(seven);
});

const eight = document.getElementById("eight");
// cuando pasamos parámetros a la función callback
// necesitamos envolver nuestra función en una función anónima
eight.addEventListener("click", function () {
  concatenar(eight);
});

function concatenar(boton) {
  // si el primer valor es 0
  // asignamos a valor1
  if (!valor1) {
    result.value += boton.innerText;
    valor1 = Number(result.value);
  }
  // si es diferente de 0
  // asignamos a valor2
  else {
    if (result.value != 0) {
      result.value += boton.innerText;
    } else {
      result.value = boton.innerText;
    }
    valor2 = Number(result.value);
  }
}

const nine = document.getElementById("nine");
// cuando pasamos parámetros a la función callback
// necesitamos envolver nuestra función en una función anónima
nine.addEventListener("click", function () {
  concatenar(nine);
});

// suma
const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", function () {
  operacion = "SUMA";
  result.value = "0";
});

// calcular resultado con el botón de igual
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function () {
  switch (operacion) {
    case "SUMA":
      result.value = valor1 + valor2;
      valor1 = Number(result.value);
      valor2 = 0;
  }
});
