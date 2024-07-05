// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = function (ar1, ar2) {
  const temp = ar1.concat(ar2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];
  for (let i = 1; i < temp.length; i++) {
    const curtemp = temp[i];
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const calcAmplitude = calcTemp([2, 3, 4, 5, 6], [4, , 5, 6, 7]);
console.log(calcAmplitude);
 */
