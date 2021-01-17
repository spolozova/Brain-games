import runGame from '../index.js';
import getRundomNumber from '../utils.js';

const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;

const isPrime = (number) => {
  const maxDivisor = number / 2;
  if (number < 2) {
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
  const question = getRundomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runGame(RULE, getQuestionAndAnswer);
};
