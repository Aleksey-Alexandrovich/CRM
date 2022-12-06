'use strict';

{
	const brand = 'Sony';
	const count = 10;
	const category = 'Television';
	const price = 639;
	const total = count * price;

	console.log(brand);
	console.log(total);


}

{
	
	const brand = prompt('Введите наименование товара:');
	const count = +prompt('Введите количество товара:');
	const category = prompt('Введите категорию товара:');
	const price = +prompt('Введите цену товара:');

	console.log(typeof brand);
	console.log(typeof +count);
	console.log(typeof category);
	console.log(typeof +price);
	console.log(`На складе ${count} единицы товара ${brand} на сумму ${price} деревянных`);

}





