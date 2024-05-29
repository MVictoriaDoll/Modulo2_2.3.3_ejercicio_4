
const input = document.querySelector('.input');
const btn = document.querySelector('.agedog');
const result = document.querySelector ('.result');


btn.addEventListener ( 'click' , (ev) => { 
   console.log ('funciona');
}

);

let dogage = parseFloat(input.value);
console.log('valor ingresado: ${dogage}');
let humanage;

if (dogage === 1) {
   humanage = 15;
} else if (dogage === 2) {
   humanage = 24;
} else if (dogage >= 3) {
   humanage = 24 + (dogage -2) *5;
} else {
   humanage = 0;
}


console.log(`La edad de ${dogage} años de perro equivale a ${humanage} años humanos.`);
result.textContent = `La edad de ${dogage} años de perro equivale a ${humanage} años humanos.`;
