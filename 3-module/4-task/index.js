/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  return users.filter((obj) => obj.age <= age).map((obj) => `${obj.name}, ${obj.balance}`).join("\n");
}
