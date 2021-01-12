import runGames from '../index.js';
import getRundomNumber from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (number) => {
  const halfOfNumber = number / 2;
  const firstPrimeNumber = 2;
  if (number < firstPrimeNumber) {
    return false;
  }
  for (let i = 2; i <= halfOfNumber; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRundomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  runGames(RULE, getQuestionAndAnswer);
};

export default runPrime;
