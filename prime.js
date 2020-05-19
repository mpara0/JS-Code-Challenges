//Solution for Is It Prime Challenge
function isItPrime(num) {
  if (num > 1 && num / num == 1 && num / 1 == num && num % 2 != 0) {
    return "prime";
  } else {
    return "!prime";
  }
}
isItPrime(5);
