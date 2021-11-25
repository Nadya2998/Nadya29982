"use strict"

let product = "Дверь";
let prise = "1000";
let c = `${product}, цена ${prise} рублей`;
alert(c);

function number(min, max) {
  if (min >= max) {
  // eslint-disable-next-line
  console.log('ошибочка вышла');
  } else {
  // eslint-disable-next-line
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
number(5, 15);
