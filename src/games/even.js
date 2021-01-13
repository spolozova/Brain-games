import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const number = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  runGames(RULE, getQuestionAndAnswer);
};
