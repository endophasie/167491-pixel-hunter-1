export const INITIAL_GAME = {
  lives: 3,
  time: 0
};

const points = 1;

export const pointsCounter = (answers, lives) => {
  if (!answers || !lives) {
    return -1;
  }
  if (answers.length < 9) {
    return -1;
  }
  if (lives === 0) {
    return -1;
  }

  return points;
};
