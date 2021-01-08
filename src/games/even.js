import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const runGameEven = () => {
  const RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const answer = (question % 2 === 0 ? 'yes' : 'no');
    return [question, answer];
  };

  runGame(RULE, getQuestionAndAnswer);
};

export default runGameEven;
