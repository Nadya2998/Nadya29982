'use strict'

let door = 'Дверь';
let estimation = '1000';
let result = `${door}, цена ${estimation} рублей`;
alert(result);

function number (min, max) {
  if (min >= max) {
  // eslint-disable-next-line
  console.log('ошибочка вышла');
  } else {
  // eslint-disable-next-line
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
number(5, 15);
