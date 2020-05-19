//solution for Add Up using a For Loop
function addNums(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
//the solution will be 10 because 1 + 2 + 3 + 4 = 10
addNums(4);

//alternative solution using a recursive call
function recursiveAdd(num) {
  //testing the base case
  if (num == 1) {
    return 1;
  }
  //recursive call
  return num + recursiveAdd(num - 1);
}

recursiveAdd(4);
