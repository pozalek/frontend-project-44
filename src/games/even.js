import startGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRoundData = () => {
  const randomNumber = getRandomNum(100);
  const evenNumber = (number) => (number % 2) === 0;
  const question = randomNumber;
  const answer = evenNumber(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const startEvenGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startEvenGame;
