import startGame from '../index.js';
import { getRandomNumber, getGCD } from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const generateRoundData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(getGCD(randomNumber1, randomNumber2));

  return [question, answer];
};

const startGcdGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startGcdGame;
