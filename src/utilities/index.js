const getRandomArrayItem = (array) => {
  return array[(Math.floor(Math.random() * array.length))];
};

export { getRandomArrayItem };
