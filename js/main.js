'use strict';

const brand = 'Sony';

const count = 10;

const category = 'Television';

const price = 639;

console.log(brand);


const total = count * price;

console.log(total);

const newBrand = prompt('Введите наименование товара:');

const newCount = prompt('Введите количество товара:');


const newCategory = prompt('Введите категорию товара:');

const newPrice = prompt('Введите цену товара:');

console.log(typeof newBrand);
console.log(typeof +newCount);
console.log(typeof newCategory);
console.log(typeof +newPrice);
console.log(`На складе ${newCount} единицы товара ${newBrand} на сумму ${newPrice} деревянных`);





