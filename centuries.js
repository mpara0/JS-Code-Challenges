function century() {
  var year = prompt("Input a year");
  return Math.floor((year-1)/100) + 1;
}

century();
