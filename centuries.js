function century(year) {
  //testing for null if user does not submit response
  if (year == null) {
    return "please input a year"
  } 
  else {
    //conditionals to determine what century the input gave
    if (year >= 2000 && year <= 2099) {
      var year = "21st";
      } else if (year >= 1900 && year <= 1999) {
        var year = "20th";
      } else if (year >= 1800 && year <= 1899) {
        var year = "19th";
      } else {
        return "you put" + year;
      }
  return year;
}
}

//testing condition
century(1998);
