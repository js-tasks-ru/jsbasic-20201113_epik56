/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  var number = 1;
  for (i = n; i >= 1; i--) {
     number *= i;
   }; 
  return number;
}
