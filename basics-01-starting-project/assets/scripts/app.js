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

function add() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult += enteredNum;
	writeLogDescription('+', initialResult, enteredNum);
	writeLogEntries('ADD', enteredNum, initialResult, currentResult);
}

addBtn.addEventListener('click', add);

function substract() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult -= enteredNum;
	writeLogDescription('-', initialResult, enteredNum);
	writeLogEntries('SUBTRACT', enteredNum, initialResult, currentResult);
}

subtractBtn.addEventListener('click', substract);

function multiply() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult *= enteredNum;
	writeLogDescription('*', initialResult, enteredNum);
	writeLogEntries('MULTIPLY', enteredNum, initialResult, currentResult);
}

multiplyBtn.addEventListener('click', multiply);

function devide() {
	const enteredNum = getUserInput();
	const initialResult = currentResult;
	currentResult /= enteredNum;
	writeLogDescription('/', initialResult, enteredNum);
	writeLogEntries('DIVIDE', enteredNum, initialResult, currentResult);
}

divideBtn.addEventListener('click', devide);
