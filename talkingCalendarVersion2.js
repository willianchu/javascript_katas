const talkingCalendar = function(date) {
  return month(splitDate('m', date))+" "+thDay(splitDate('d', date))+", "+splitDate('y', date);
};

function month(string){
  month_names = { '01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December' };	
  return month_names[string];
}

function thDay(day){
  let current = day[0] == 0 ? day[1] : day; // eliminates the 0 in front of the day if it exists
  let thDay = '';
  if(day[1]=="1" && day[0] !="1"){
    thDay = "st";	
  }else if(day[1]=="2" && day[0] !="1"){
    thDay = "nd";	
  }else if(day[1]=="3" && day[0] !="1"){
    thDay = "rd";	
  }else {
    thDay = "th";	
  }
  return current+thDay;
}

function splitDate(ymd, string){
  if((string.length == 10)){
    switch(ymd) {
      case 'y':
        return string.slice(0,4);
        break;
      case 'm':
        return string.slice(5,7);
        break;
      case 'd':
        return string.slice(8,10);
        break;  
      default:
        return false;
    }
  }
  return false;
}

console.log(talkingCalendar("2013/12/02"));
console.log(talkingCalendar("2007/09/01"));
console.log(talkingCalendar("2017/11/11"));
console.log(talkingCalendar("2027/12/31"));
console.log(talkingCalendar("1987/08/24"));