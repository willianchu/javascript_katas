// const daysInMonth = (month, isLeap) => {
//   if (month < 8){
//     if (month === 2){
//       return isLeap ? 29 : 28;
//     } else {
//     return (month % 2) !== 0 ? 31 : 30;  
//     }
//   } else {
//     return (month % 2) === 0 ? 31 : 30;
//   }
// }

const daysInMonth = (month, year) => {
  let MonthsDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if(month === 2 && isLeap(year)) MonthsDays[1] = 29;
  return MonthsDays[month - 1];
}

const isLeap = (year) =>{
  let answer = false;
  if(year < 1918){
    answer = (year % 4) === 0 ? true : false; 
  } else {
    if (year % 400 === 0 || (((year % 4) === 0) && (((year % 100) !== 0))) ){
      answer = true;
    } 
  }
  return answer;
}

const dotDate = (days, months, year) => {
  let day = days < 10 ? "0" + days : days;
  let month = months < 10 ? "0" + months : months;
  return day +"."+ month +"."+ year;  
}

const dayOfProgrammer = (year) => {
  let days = year === 1918 ? (256 + 13) : 256;
  let month = 1;
  
  do {
    days -= daysInMonth(month, year);
    month ++;
  } while (days > daysInMonth(month, year))
  console.log(days,month,year);
  return dotDate(days,month,year);
}

console.log(dayOfProgrammer(1918));