// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
let welcome = document.querySelector("#welcome");
welcome.addEventListener("click", () => {
  alert("Hello, world!");
});

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let btnEx02 = document.querySelector("#btn-ex02");

function sum(n1, n2) {
  let resultEx02 = document.querySelector("#resultEx02");

  n1 = document.querySelector("#num1");
  n2 = document.querySelector("#num2");

  resultEx02.textContent = 
    `O resultado de ${n1.value} somado a ${n2.value} é: 
    ${Number(n1.value) + Number(n2.value)}`;

  let result = resultEx02.textContent;

  n1.value = "";
  n2.value = "";

  return result;
}

btnEx02.addEventListener("click", sum);
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//     Para saber o tipo de dado você pode usar o operador `typeof`

let btnEx03 = document.querySelector("#btn-ex03");

function verifyNumber() {
  let num = 100;
  let type = typeof num;

  return alert(`${num} é do tipo ${type}!`);
}

btnEx03.addEventListener("click", verifyNumber);

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let btnEx04 = document.querySelector("#btn-ex04");

function verifyString() {
  let txt = "O que é isso?";
  let type = typeof txt;

  return alert(`${txt} é do tipo ${type}!`);
}

btnEx04.addEventListener("click", verifyString);

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let btnEx05 = document.querySelector("#btn-ex05");

function verifyString() {
  let txt = true;
  let type = typeof txt;

  return alert(`${txt} é do tipo ${type}!`);
}

btnEx05.addEventListener("click", verifyString);

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let btnEx06 = document.querySelector("#btn-ex06");

function subtract(n1, n2) {
  let resultEx06 = document.querySelector("#resultEx06");

  n1 = document.querySelector("#num1-subtract");
  n2 = document.querySelector("#num2-subtract");

  resultEx06.textContent = 
    `O resultado de ${n1.value} subtraído de ${n2.value} é: 
    ${Number(n1.value) - Number(n2.value)}`;

  let result = resultEx06.textContent;

  n1.value = "";
  n2.value = "";

  return result;
}

btnEx06.addEventListener("click", subtract);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let btnEx07 = document.querySelector("#btn-ex07");

function multiplication(n1, n2) {
  let resultEx07 = document.querySelector("#resultEx07");

  n1 = document.querySelector("#num1-mult");
  n2 = document.querySelector("#num2-mult");

  resultEx07.textContent = 
    `O resultado de ${n1.value} multiplicado por ${n2.value} é: 
    ${Number(n1.value) * Number(n2.value)}`;

  let result = resultEx07.textContent;

  n1.value = "";
  n2.value = "";

  return result;
}

btnEx07.addEventListener("click", multiplication);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let btnEx08 = document.querySelector("#btn-ex08");

function divisor(n1, n2) {
  let resultEx08 = document.querySelector("#resultEx08");

  n1 = document.querySelector("#num1-div");
  n2 = document.querySelector("#num2-div");

  resultEx08.textContent = 
    `O resultado de ${n1.value} dividio por ${n2.value} é: 
    ${Number(n1.value) / Number(n2.value)}`;

  let result = resultEx08.textContent;

  n1.value = "";
  n2.value = "";

  return result;
}

btnEx08.addEventListener("click", divisor);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let btnEx09 = document.querySelector("#btn-ex09");

let isPar = (num) => {
  let result = document.querySelector("#resultEx09");
  num = document.querySelector("#num-ex09");

  if(num.value % 2 == 0) {
    result.textContent = `${num.value} é PAR`;
  } else {
    result.textContent = `${num.value} não é PAR`;
  }
}

btnEx09.addEventListener("click", isPar);

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let btnEx10 = document.querySelector("#btn-ex10");

let isImpar = (num) => {
  let result = document.querySelector("#resultEx10");
  num = document.querySelector("#num-ex10");

  if(num.value % 2 != 0) {
    result.textContent = `${num.value} é ÍMPAR`;
  } else {
    result.textContent = `${num.value} não é ÍMPAR`;
  }
}

btnEx10.addEventListener("click", isImpar);