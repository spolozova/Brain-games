const getRandomNumber = (min = 1, max = 1000) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};
export const rightAnswer = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export default getRandomNumber;
