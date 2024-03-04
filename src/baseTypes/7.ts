/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Mon = 'MON',
  Tue = 'TUE',
  Wed = 'WED',
  Thu = 'THU',
  Fri= 'FRI',
  Sat = 'SAT',
  Sun = 'SUN'
}

function isWeekend (day:string):boolean {
  if (day === Day.Sun || Day.Sat) {
    return true;
  } else {
    return false;
  }
};