import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runGame(RULE, getQuestionAndAnswer);
};
