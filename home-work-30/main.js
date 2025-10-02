console.log('#11. JavaScript homework example file');

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const value = email.trim();

  const emailRegex = new RegExp(
    '^' +
      // local-part
      '(?![.])' + // не починати з крапки
      '(?!.*[.]{2})' + // без подвійних крапок
      "[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+" +
      "(?:\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*" +
      '@' +
      // domain
      '(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\\.)+' +
      '[A-Za-z]{2,24}' +
      '$'
  );
  return emailRegex.test(value);
}

// console.log(isValidEmail('example@example.com')) // Повинно вивести: true
// console.log(isValidEmail('invalid-email'))       // Повинно вивести: false

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  if (typeof url !== 'string') return false;
  const value = url.trim();

  const urlRegex =
    /^(https?:\/\/)(?:www\.)?(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,24}(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  return urlRegex.test(value);
}

// console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
// console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl };
