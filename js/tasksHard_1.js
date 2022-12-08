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


// // Шестая задача--------------------------

// {
// 	const myIncome = +prompt('Какой ваш доход?');
// 	const sumOne = 15000;
// 	const sumTwo = 50000;

// 	const resultTaxOne = (myIncome - sumOne) / 100 * 20;
// 	const resultTaxTwo = (myIncome - sumTwo) / 100 * 30;
// 	console.log(resultTaxOne);
// 	console.log(resultTaxTwo);





// 	// const myTax = (myIncome / 100 * 13);
// 	// const myTaxTwo = (myIncome / 100 * 20);
// 	// const myTaxThree = (myIncome / 100 * 30);




// }