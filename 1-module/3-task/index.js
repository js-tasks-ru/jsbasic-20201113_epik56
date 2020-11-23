/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str === "" || str.length === 1) {
    return str.toUpperCase();
   } else (str.length > 1) 
     return str[0].toUpperCase() + str.slice(1);
   
}

