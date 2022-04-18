const talkingCalendar = function(date) {
  return month(splitDate('m', date))+" "+thDay(splitDate('d', date))+", "+splitDate('y', date);
};
function month(string){
  switch(string) {
    case '01':
      return 'January';
    case '02':
      return 'February';
    case '03':
      return 'March'; 
    case '04':
      return 'April';
    case '05':
      return 'May';
    case '06':
      return 'June'; 
    case '07':
      return 'July';
    case '08':
      return 'August';
    case '09':
      return 'September'; 
    case '10':
      return 'October';
    case '11':
      return 'November';
    case '12':
      return 'December';  
    default:
      return false;
  }
}

function thDay(day){
  let current = day[0] == 0 ? day[1] : day;
  switch(current) {
    case "1":
      return current + 'st';
    case "2":
      return current + 'nd';
    case "3":
      return current + 'rd';
    case "21":
      return current + 'st';
    case "22":
      return current + 'nd';
    case "23":
      return current + 'rd';    
    default:
      return current + 'th';  
  }
}

function splitDate(ymd, string){
  if((string.length == 10)){
    switch(ymd) {
      case 'y':
        return string[0]+string[1]+string[2]+string[3];
        break;
      case 'm':
        return string[5]+string[6];
        break;
      case 'd':
        return string[8]+string[9]; 
        break;  
      default:
        return false;
    }
  }
  return false;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));