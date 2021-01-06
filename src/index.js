// общие принципы работы игры. необходимо подставлять нужные аргументы исполняемых файлах.
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runGames = (answer, game, rules) => {
  const userName = greeting();
  console.log(rules);
  let result = `Congratulations, ${userName}!`;
  let counter = 0;
  while (counter <= 2) {
    const question = game(); // берется основная функция из файла с игрой.
    const rightAnswer = answer(question); // функция правильного ответа из файла с игрой.
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    }
    if (gamerAnswer !== rightAnswer) {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      result = `Let's try again, ${userName}!`;
      counter += 3;
    }
  }
  console.log(result);
};
export default runGames;
