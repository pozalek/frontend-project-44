import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameTask = 'What is the result of the expression?';

const generateRoundData = () => {
  const randomArrElement = Math.floor(Math.random() * 3);
  const randomNumber1 = getRandomNumber(1, 10);
  const randomNumber2 = getRandomNumber(1, 10);

  const arr = [randomNumber1 + randomNumber2, randomNumber1 - randomNumber2,
    randomNumber1 * randomNumber2];

  const operators = ['+', '-', '*'];
  const question = `${randomNumber1} ${operators[randomArrElement]} ${randomNumber2}`;
  const answer = String(arr[randomArrElement]);

  return [question, answer];
};

const startCalcGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startCalcGame;
