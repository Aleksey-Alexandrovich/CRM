// Пятая задача-------------------------
{
	const myIncome = +prompt('Какой ваш доход?');
	const myTax = (myIncome / 100 * 13);
	const myTaxTwo = (myIncome / 100 * 20);
	const myTaxThree = (myIncome / 100 * 30);

	if(myIncome < 15000) {
	console.log(`Ваш налог составляет ${myTax}`);
	} 
	if(myIncome >= 15000 && myIncome === 50000) {
	console.log(`Ваш налог составляет ${myTaxTwo}`);
	}

	if(myIncome > 50000) {
	console.log(`Ваш налог составляет ${myTaxThree}`);
	}

}


// Шестая задача--------------------------

{
	const myIncome = +prompt('Какой ваш доход?');
	const sumOne = 15000;
	const sumTwo = 50000;

	const sumDifferenceONe = myIncome - sumOne;
	const sumDifferenceTwo = myIncome - sumTwo;

	const resultRegularTax = (myIncome / 100 * 13);
	const resultTaxOne = (sumDifferenceONe / 100) * 20;
	const resultTaxTwo = (sumDifferenceTwo / 100) * 30;

	if(myIncome <= 15000) {
		console.log(`Ваш налог: ${resultRegularTax}`);
	}

	if(myIncome > 15000 && myIncome <= 50000) {
		console.log(`Ваш налог: ${resultTaxOne}`);
	}

	if(myIncome > 50000) {
		console.log(`Ваш налог: ${resultTaxTwo}`);
	} 

	

}