// Import stylesheets
import './style.css';

const integerNums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

const checkIterationsLimit = (len, res) => len === 'four';

const lengthOfNum = (len) => {
  let result = [integerNums[len]];
  const maxIterations = result[0].length;

  for (let i = 1; i < maxIterations; i++) {
    const nextLen = integerNums[result[result.length - 1].length];
    result = [...result, nextLen];

    if (checkIterationsLimit(nextLen)) {
      return result;
    }
  }

  return result;
};

const splitNum = (num) =>
  num
    .toString()
    .split('')
    .map((digit) => integerNums[digit])
    .join('');

const data = (num) => {
  let numSplit = splitNum(num);
  let numAboveLimit, lenOfNum;

  if (numSplit.length >= 10) {
    numAboveLimit = splitNum(numSplit.length);
    lenOfNum = lengthOfNum(numAboveLimit.length);
  } else {
    lenOfNum = lengthOfNum(numSplit.length);
  }

  return [
    numSplit,
    ...[numSplit.length >= 10 ? numAboveLimit : []],
    lenOfNum,
  ].flat();
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = JSON.stringify(data(60));
