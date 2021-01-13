import runGames from '../index.js';
import getRundomNumber from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;
const FIRST_PRIME_NUMBER = 2;

const isPrime = (number) => {
  const maxDivisor = number / 2;
  if (number < FIRST_PRIME_NUMBER) {
    return false;
  }
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRundomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  runGames(RULE, getQuestionAndAnswer);
};
