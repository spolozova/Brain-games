import _ from 'lodash';
import getrandomNumber from '../utils.js';
import runGames from '../index.js';

const RULE = 'What is the result of the expression?';

const MINIMUM_NUMBER = 1;
const MAXIMUM_NUMBER = 100;

const getRightAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'mistake';
  }
};

const getQuestionAndAnswer = () => {
  const number1 = getrandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const number2 = getrandomNumber(MINIMUM_NUMBER, MAXIMUM_NUMBER);
  const operator = _.sample(['+', '-', '*']);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(getRightAnswer(operator, number1, number2));
  return [question, answer];
};

export default () => {
  runGames(RULE, getQuestionAndAnswer);
};
