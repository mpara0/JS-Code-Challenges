//solution for FizzBuzz
function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } 
  else if (num % 3 == 0) {
    return "Fizz";
  } else {
    return "Buzz";
  }
}

fizzBuzz(5);
