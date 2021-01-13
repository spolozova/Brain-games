import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const RULE = 'Find the greatest common divisor of given numbers.';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const number2 = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));
  return [question, answer];
};

export default () => {
  runGames(RULE, getQuestionAndAnswer);
};
