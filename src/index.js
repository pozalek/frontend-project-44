import readlineSync from 'readline-sync';

const numRounds = 3;

const engineGame = (gameTask, gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(gameTask);

  for (let i = 0; i < numRounds; i += 1) {
    const [question, answer] = gameLogic();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isAnswerCorrent = userAnswer === answer;

    if (isAnswerCorrent) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engineGame;
