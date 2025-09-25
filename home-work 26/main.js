console.log('#9. JavaScript homework example file');

/*
 * #1
 *
 * Задача: Відстежування кліку на кнопку та виведення повідомлення
 * Мета: Розробити функцію, яка призначає обробник події кліку на кнопку з певним ID і виводить у консоль заздалегідь визначене повідомлення при кожному кліку на кнопку.
 *
 * Вимоги:
 * 1. Функція має приймати два параметри:
 *    - buttonId (рядок) - ID кнопки, на яку потрібно встановити обробник події.
 *    - message (рядок) - повідомлення, яке буде виводитись у консоль при кліку на кнопку.
 * 2. Функція має знайти кнопку за допомогою buttonId і призначити їй обробник події кліку.
 * 3. При кліку на кнопку у консоль має виводитись задане message.
 * 4. Функція має бути експортована для подальшого використання і тестування.
 *
 */

function handleButtonClick(buttonId, message) {
  if (typeof document === 'undefined') {
    console.warn(
      'handleButtonClick: document is not available (non-browser env).'
    );
    return () => {};
  }
  if (!buttonId || typeof buttonId !== 'string') {
    console.warn('handleButtonClick: expected buttonId as string.');
    return () => {};
  }
  const btn = document.getElementById(buttonId);
  if (!btn) {
    console.warn(`handleButtonClick: button with id "${buttonId}" not found.`);
    return () => {};
  }
  const handler = () => console.log(message);
  btn.addEventListener('click', handler);
  // повертаємо “відписку”
  return () => btn.removeEventListener('click', handler);
}

// Демонстрація (за наявності кнопки з id="myButton"):
// const offClick = handleButtonClick('myButton', 'Button clicked!')
// offClick() // щоб зняти слухач

// Демонстрація використання функції (припустимо, що HTML містить кнопку з ID 'myButton')
// handleButtonClick('myButton', 'Button clicked!');

/*
 * #2
 *
 * Задача: Розробка функції відстеження позиції курсору миші
 * Мета: Створити функцію trackMousePosition, яка встановлює обробник події для відстеження руху миші по документу та виводить в консоль координати курсору миші (X та Y).
 *
 * Вимоги до реалізації:
 * 1. Функціональність: Функція має відслідковувати рух миші по документу. При кожному русі миші функція має виводити в консоль координати clientX та clientY, які представляють позицію курсору відносно вікна переглядача.
 * 2. Реєстрація обробника події: Функція має використовувати document.addEventListener для реєстрації обробника події mousemove.
 * 3. Вивід даних: При спрацьовуванні події mousemove, функція має виводити рядок у форматі `"Mouse X: [X], Mouse Y: [Y]"`, де `[X]` та `[Y]` - це відповідні координати курсору миші.
 *
 */

function trackMousePosition() {
  if (typeof document === 'undefined') {
    console.warn(
      'trackMousePosition: document is not available (non-browser env).'
    );
    return () => {};
  }
  const handler = (e) => {
    const { clientX, clientY } = e;
    console.log(`Mouse X: ${clientX}, Mouse Y: ${clientY}`);
  };
  document.addEventListener('mousemove', handler);
  // повертаємо “відписку”
  return () => document.removeEventListener('mousemove', handler);
}

// console.log(trackMousePosition())

/*
 * #3
 *
 * Задача: Реалізація делегування подій для відстеження кліків на елементах списку
 * Мета: Створити функцію setupEventDelegation, яка дозволить встановити обробник подій на весь список, замість окремих елементів `<li>`. Функція повинна відстежувати кліки на елементах <li> у межах заданого списку і логувати текст "Item clicked: [Текст Елемента]", де "[Текст Елемента]" - це текст клікнутого елемента `<li>`, в консоль.
 *
 * Вимоги до реалізації:
 * 1. Вибір елемента списку: Функція повинна приймати селектор CSS як аргумент, що вказує на елемент списку `<ul>` або `<ol>`, до якого буде застосовано делегування подій.
 * 2. Встановлення обробника подій: Використовуючи метод addEventListener, функція має додати обробник для події `click` на весь список. Обробник повинен спрацьовувати при кліку на будь-який з елементів `<li>` у цьому списку.
 * 3. Логування кліків: Коли елемент <li> клікнуто, функція має вивести у консоль повідомлення у форматі "Item clicked: [Текст Елемента]", де "[Текст Елемента]" має бути текстом клікнутого елемента <li>. Текст елемента має бути обрізаним trim(), щоб видалити зайві пробіли на початку та в кінці.
 *
 */

// function createTestList() {
//   document.body.innerHTML = `
//     <ul id="testList">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//     </ul>
//     `
// }
// createTestList()

function setupEventDelegation(selector) {
  if (typeof document === 'undefined') {
    console.warn(
      'setupEventDelegation: document is not available (non-browser env).'
    );
    return () => {};
  }
  if (!selector || typeof selector !== 'string') {
    console.warn('setupEventDelegation: expected a CSS selector string.');
    return () => {};
  }
  const list = document.querySelector(selector);
  if (!list) {
    console.warn(`setupEventDelegation: list element "${selector}" not found.`);
    return () => {};
  }
  const handler = (e) => {
    // знаходимо найближчий <li> від місця кліку
    const li = e.target && e.target.closest ? e.target.closest('li') : null;
    // перевіряємо, що знайдений <li> належить нашому списку
    if (li && list.contains(li)) {
      const text = (li.textContent || '').trim();
      console.log(`Item clicked: ${text}`);
    }
  };
  list.addEventListener('click', handler);
  // повертаємо “відписку”
  return () => list.removeEventListener('click', handler);
}
// setupEventDelegation('#testList')

// Експорт функції для використання та тестування
export { handleButtonClick, trackMousePosition, setupEventDelegation };
