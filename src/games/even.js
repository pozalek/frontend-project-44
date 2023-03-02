import readlineSync from 'readline-sync';
import getRandomNum from '../getRandomNum.js';

const evenNumber = (number) => (number % 2) === 0;
const oddNumber = (number) => (number % 2) !== 0;

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const parityGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNum(100);
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnsw = (evenNumber(randomNumber) && userAnswer === 'yes') || (oddNumber(randomNumber) && userAnswer === 'no');

    if (correctAnsw) {
      console.log('Correct!');
    } else if (evenNumber(randomNumber) && userAnswer !== 'yes') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default parityGame;
