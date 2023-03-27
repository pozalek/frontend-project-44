import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'What is the result of the expression?';

const getMathOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 2)];
};

const getCalculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateRoundData = () => {
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);
  const operator = getMathOperator();

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = String(getCalculation(randomNumber1, randomNumber2, operator));

  return [question, answer];
};

const startCalcGame = () => startGame(gameTask, generateRoundData);

export default startCalcGame;
