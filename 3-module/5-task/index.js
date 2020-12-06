/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  return {
    min: Math.min.apply(null, (str.split(" ").join(",").split(",").map((item) => +item).filter((item) => !isNaN(item)))),
    max: Math.max.apply(null, (str.split(" ").join(",").split(",").map((item) => +item).filter((item) => !isNaN(item))))
  } 
}
