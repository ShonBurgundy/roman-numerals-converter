//Business Interface
var convertToRoman = function(num) { //function will convert roman numerals
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  var result = "";

  for (var i = 0; i < decimal.length; i++) { //run through array by +1 till end of array
    while (decimal[i] <= num) { //if num input is 50  it will be compared to the first index of the decimal var ([0]=1000) will come back false, will run through this process till it comes back with 50 (true). Once found true runs next lines.
      result += romanNumeral[i];//This appends the result to what the index it lands on in romanNumeral array.
      num -= decimal[i];//subtracts decimal index value from num (userinput) then will run back through for loop until it hits the end.. (.length)
    }
  }
  return result;
};

//console.log();

//UI
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    $('#output').text(convertToRoman(userInput));
    console.log(result)
  });
});