function ageClassification(num) {
  if (num <= 0) return null;
  if (num <= 24) return 'Дитинство';
  if (num <= 44) return 'Молодість';
  if (num <= 65) return 'Зрілість';
  if (num <= 75) return 'Старість';
  if (num <= 90) return 'Довголіття';
  if (num <= 122) return 'Рекорд';
  return null;
}

function weekFn(cond) {
  switch (cond) {
    case 1:
      return 'Понеділок';
    case 2:
      return 'Вівторок';
    case 3:
      return 'Середа';
    case 4:
      return 'Четвер';
    case 5:
      return "П'ятниця";
    case 6:
      return 'Субота';
    case 7:
      return 'Неділя';
    default:
      return null;
  }
}

module.exports = { ageClassification, weekFn };
