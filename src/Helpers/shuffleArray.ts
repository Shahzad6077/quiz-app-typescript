export const shuffleArray = (array: Array<string>): Array<string> => {
  // var currentIndex = array.length,
  //   temporaryValue,
  //   randomIndex;

  // // While there remain elements to shuffle...
  // while (0 !== currentIndex) {
  //   // Pick a remaining element...
  //   randomIndex = Math.floor(Math.random() * currentIndex);
  //   currentIndex -= 1;

  //   // And swap it with the current element.
  //   temporaryValue = array[currentIndex];
  //   array[currentIndex] = array[randomIndex];
  //   array[randomIndex] = temporaryValue;
  // }
  const shuffledArr = [...array];
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }

  return shuffledArr;
};
