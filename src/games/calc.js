import _ from 'lodash';
import randomNumber from '../utils.js';
import runGames from '../index.js';

const RULE = 'What is the result of the expression?';

const getRightAnswer = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const getQuestionAndAnswer = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const [x, y] = [number1, number2];
  const operator = _.sample(['+', '-', '*']);
  const question = `${x} ${operator} ${y}`;
  const answer = String(getRightAnswer(operator, number1, number2));
  return [question, answer];
};

const runCalculator = () => {
  runGames(RULE, getQuestionAndAnswer);
};

export default runCalculator;
