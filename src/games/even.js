import engineGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameTask = 'What is the result of the expression?';

const gameLogic = () => {
  const randomNumber = getRandomNum(100);
  const evenNumber = (number) => (number % 2) === 0;
  const question = randomNumber;
  const answer = evenNumber(randomNumber) ? 'yes' : 'no';

  return [question, answer];
};

const brainEven = () => {
  engineGame(gameTask, gameLogic);
};

export default brainEven;
