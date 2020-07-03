//functon to remove all even letters in a given string
function trollz(str) { 

  //testing for null
  if (str == null) {
    return "please input a string with atleast one vowel and try again";
  } else {           
     //create a new empty string
    let string = "";

    //iterate through for-loop and check the conditional at each index to remove the vowel; not the most effective but this will do with the annoying IDE errors
    let newString = "";                            
    for (let x = 0; x < str.length; x++) {           
      if (str[x] != "a" && str[x] != "e" 
      && str[x] != "i" && str[x] != "o" 
      && str[x] != "u") {           
       newString += str[x];         
      } 
    } 
    return newString;  
 } 
}

trollz("This website is for losers LOL!");

//ALTERNATIVE SOLUTIONS
//create an array of all the vowels, a new empty string and then create a for loop to iterate through the string nested inside a conditional to check each index of the string over each index of the vowels array. return only consonance to the new string
//use the replace method by doing the following:
//str.replace(/[aeiou]/gi, ''); 
