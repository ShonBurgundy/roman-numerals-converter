//UI
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {convertToRoman} from "./../src/roman-numerals.js";

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#userInput").val();
    console.log(userInput);
    $('#output').text(convertToRoman(userInput));
  });
});  
