import readlineSync from 'readline-sync';
import getRandomNum from '../getRandomNum.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const parityGame = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNum(100);
    const evenNumber = randomNumber % 2 === 0;
    const oddNumber = randomNumber % 2 !== 0;
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnsw = (evenNumber && userAnswer === 'yes') || (oddNumber && userAnswer === 'no');
    // const wrongAnsw = (evenNumber && userAnswer !== 'yes') || (oddNumber && userAnswer !== 'no');

    if (correctAnsw) {
      console.log('Correct!');
    } else if (evenNumber && userAnswer !== 'yes') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default parityGame;
