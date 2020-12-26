import readlineSync from 'readline-sync';
import greeting from './cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const evenNumbers = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let counter = 0;
  let result = `Congratulations, ${userName}!`;
  while (counter <= 2) {
    const number = getRandomNumber(1, 1000);
    console.log(`Question: ${number}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && gamerAnswer === 'yes') {
      console.log('Correct!');
      counter += 1;
    }
    if (number % 2 === 0 && gamerAnswer !== 'yes') {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was 'yes'`);
      result = `Let's try again, ${userName}!`;
      counter += 3;
    }
    if (number % 2 !== 0 && gamerAnswer === 'no') {
      console.log('Correct!');
      counter += 1;
    }
    if (number % 2 !== 0 && gamerAnswer !== 'no') {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was 'no'`);
      result = `Let's try again, ${userName}!`;
      counter += 3;
    }
  }
  console.log(result);
};
export default evenNumbers;
