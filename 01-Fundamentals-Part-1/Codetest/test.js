"use strict";
const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(`${scoreDolphins} socre k ${scoreKoalas}`);
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins === avgKoalas) {
    console.log("no one wins");
  } else if (avgDolhins >= 2 * avgKoalas) {
    console.log("dolphins win");
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log("koalas win");
  } else {
    console.log("no one wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);
