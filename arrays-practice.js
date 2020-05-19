//solution for Sum of All arrays
function sumOfAll(num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

sumOfAll([19, 5, 42, 2, 77]);

//solution for Calculate Total Pay
function totalPay(dogWalks) {
  let sum = 0;
  let dogs = 0;
  for (i = 0; i < dogWalks.length; i++) {
    dogs = dogWalks[i] * 22;
    sum += dogs;
  }
  return sum;
}

totalPay([4, 5, 2, 2, 6, 1, 3])
