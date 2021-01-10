import readlineSync from 'readline-sync';

const greetGamer = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
export default greetGamer;
