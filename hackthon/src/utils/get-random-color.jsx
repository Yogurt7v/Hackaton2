export const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random()*16777215).toString(16);
  const randomColor = '#' + randomNumber;

  return randomColor
}