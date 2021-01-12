import readlineSync from 'readline-sync';

const runGames = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log(rule);
  let counter = 0;
  const numberOfRepetitions = 2;
  while (counter <= numberOfRepetitions) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${gamerName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${gamerName}!`);
};
export default runGames;
