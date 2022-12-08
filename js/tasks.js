// Вторая задача 4.3

'use strict';

{

	const rain = Math.round(Math.random());
	console.log(rain);
	
	if(Math.round(rain) === 1) {
		alert("Пошёл дождь. Возьмите зонт!");
		
	} else if (Math.round(rain) === 0) {
		alert("Дождя нет!");
	}

	
}

//Третья задача 4.3

{
	const pointMaths = +prompt('Сколько у вас баллов по математике?');
	const pointRus = +prompt('Сколько у вас баллов по математике?');
	const pointInfo = +prompt('Сколько у вас баллов по математике?');
	const pointTotal = Math.round(pointMaths + pointInfo + pointRus);

	console.log(pointInfo);
	console.log(pointMaths);
	console.log(pointRus);
	console.log(pointTotal);
	
	if(pointTotal >= 265) {
		alert('Поздравляю, вы поступили на бюджет!');
	} else {
		alert('Баллов не хватает, попробуйте пересдать позже!');
	}
}

//Четвертая задача ---------------------------

{

const cashRequest = +prompt('Сколько вы хотите снять денег?');
const cashMoney = Math.round(cashRequest);

if(cashMoney >= 100) {
	alert(`Успешное снятие наличных в количестве ${cashMoney}`);
}else if(cashMoney < 100) {
	alert(`Вы не можете снять меньше 100 рублей, ваш запрос  ${cashMoney}`);
} else {
	alert('Неправильный формат ввода данных');
}
}


