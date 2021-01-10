import runGames from '../index.js';
import getRandomNumber from '../utils.js';

const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  runGames(RULE, getQuestionAndAnswer);
};

export default runEven;
