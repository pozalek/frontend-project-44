import engineGame from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) {
    return 'Число должно быть больше 1!!!';
  } if (n === 2) {
    return 'yes';
  }

  const limit = Math.sqrt(n);
  for (let i = 2; i <= limit; i += 1) {
    if (n % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getRandomArbitrary = (min, max) => Math.ceil(Math.random() * (max - min) + min);

const gameLogic = () => {
  const randomNumber = getRandomArbitrary(2, 50);
  const question = randomNumber;
  const answer = isPrime(randomNumber);
  return [question, answer];
};

const brainPrime = () => {
  engineGame(gameTask, gameLogic);
};

export default brainPrime;
