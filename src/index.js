import readlineSync from 'readline-sync';

const runGames = (RULE, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${gamerName}!`);
  console.log(RULE);
  let result = `Congratulations, ${gamerName}!`;
  let counter = 0;
  while (counter <= 2) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const gamerAnswer = readlineSync.question('Your answer: ');
    if (gamerAnswer === rightAnswer) {
      console.log('Correct!');
      counter += 1;
    }
    if (gamerAnswer !== rightAnswer) {
      console.log(`'${gamerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      result = `Let's try again, ${gamerName}!`;
      counter += 3;
    }
  }
  console.log(result);
};
export default runGames;
