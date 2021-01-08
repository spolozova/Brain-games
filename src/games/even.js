import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const runGameEven = () => {
  const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const answer = getRightAnswer(question);
    return [question, answer];
  };

  runGame(RULE, getQuestionAndAnswer);
};

export default runGameEven;
