import startGame from '../index.js';
import { getRandomNumber, isPrimeNumber } from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRoundData = () => {
  const randomNumber = getRandomNumber(2, 50);
  const question = randomNumber;
  const answer = isPrimeNumber(randomNumber);

  return [question, answer];
};

const startPrimeGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startPrimeGame;
