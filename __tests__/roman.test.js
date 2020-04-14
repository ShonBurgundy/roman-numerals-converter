//Test 1 
import { convertToRoman } from './../src/roman-numerals.js'
describe('convertToRoman', () => {
  test('should correctly convert numbers to roman numerals', () => {
    var toRoman = convertToRoman(1);
    console.log(toRoman);
    expect(toRoman).toEqual("I");
  
  });
});