let currentResult = 0;
let logEntries = [];

function getUserInput() {
	return parseInt(userInput.value);
}

function writeLogDescription(operator, resultBeforeCalc, userInputVal) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${userInputVal}`;
	outputResult(currentResult, calcDescription);
}

function writeLogEntries(operader, numberEntered, beforeResults, newResult) {
	const logEntry = {
		operater: operader,
		addedNum: numberEntered,
		preResult: beforeResults,
		newResults: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculateResult(operationType) {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	let calculatonOperator;
	if (operationType === 'ADD') {
		currentResult += enteredNum;
		calculatonOperator = '+';
	} else if (operationType === 'SUBSTRACT') {
		currentResult -= enteredNum;
		calculatonOperator = '-';
	} else if (operationType === 'MULTIPLY') {
		currentResult *= enteredNum;
		calculatonOperator = '*';
	} else if (operationType === 'DIVIDE') {
		currentResult /= enteredNum;
		calculatonOperator = '/';
	} else {
		return;
	}
	writeLogDescription(calculatonOperator, initialResult, enteredNum);
	writeLogEntries(operationType, enteredNum, initialResult, currentResult);
}

function add() {
	calculateResult('ADD');
}

function substract() {
	calculateResult('SUBSTRACT');
}

function multiply() {
	calculateResult('MULTIPLY');
}

function devide() {
	calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', devide);
