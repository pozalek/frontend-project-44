import startGame from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const GCD = (x, y) => {
  if (y > x) {
    return GCD(y, x);
  } if (!y) {
    return x;
  }
  return GCD(y, x % y);
};

const generateRoundData = () => {
  const randomNumber1 = getRandomNum(100);
  const randomNumber2 = getRandomNum(100);

  const findGCD = GCD(randomNumber1, randomNumber2);

  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(findGCD);

  return [question, answer];
};

const startGcdGame = () => {
  startGame(gameTask, generateRoundData);
};

export default startGcdGame;
