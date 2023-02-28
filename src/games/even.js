import readlineSync from 'readline-sync';

const parityGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.ceil(Math.random() * 100);
    const evenNumber = randomNumber % 2 === 0;
    const oddNumber = randomNumber % 2 !== 0;

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (evenNumber && userAnswer === 'yes') {
      console.log('Correct!');
    } else if (evenNumber && userAnswer !== 'yes') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}!`);
    } else if (oddNumber && userAnswer === 'no') {
      console.log('Correct!');
    } else if (oddNumber && userAnswer !== 'no') {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default parityGame;
