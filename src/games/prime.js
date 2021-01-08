import runGames from '../index.js';
import getRundomNumber from '../utils.js';

const runGamePrime = () => {
  const RULE = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const getRightAnswer = (number) => {
    if (number < 2) {
      return 'no';
    }
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const getQuestionAndAnswer = () => {
    const question = getRundomNumber();
    const answer = getRightAnswer(question);
    return [question, answer];
  };

  runGames(RULE, getQuestionAndAnswer);
};
export default runGamePrime;
