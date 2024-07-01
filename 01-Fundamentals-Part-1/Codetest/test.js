let markMass, johnMass, markHeight, johnHeight;
markMass = 78;
markHeight = 1.69;
johnMass = 92;
johnHeight = 1.95;
//Bmi formula
let markBMI, johnBMI;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
if (markBMI > johnBMI) {
  console.log(`MarkBMI ${markBMI} is higher than john's! ${johnBMI}`);
} else {
  console.log(`johnBMI is higher than marks!`);
}
