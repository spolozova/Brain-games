import getRandomNumber from '../utils.js';
import runGames from '../index.js';

const runGameProgression = () => {
  const RULE = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const getFullProgression = () => {
      const counter = getRandomNumber();
      let lastNumber = getRandomNumber();
      const fullProgression = [];
      for (let i = 0; i <= 10; i += 1) {
        fullProgression.push(lastNumber);
        lastNumber += counter;
      }
      return fullProgression;
    };
    const progression = getFullProgression();
    const missNumber = getRandomNumber(0, 9);
    const getAnswer = progression.splice(missNumber, 1, '..');
    const question = progression.join(' ');
    const answer = String(getAnswer);
    return [question, answer];
  };

  runGames(RULE, getQuestionAndAnswer);
};

export default runGameProgression;
