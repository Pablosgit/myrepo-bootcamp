const isValidYear = year => year && year >= new Date().getFullYear();
const isValidMonth = month => (month && (month >= 1) && (month <= 12));
const isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
const isValidDay = (day, month, year) => {
    let februaryLength = isLeapYear(year) ? 29: 28;
    let monthLength = [31,februaryLength,31,30,31,30,31,31,30,31,30,31];
    return day > 0 && day <= monthLength[month-1];
}
const isCorrectDate = (day, month, year) => { 
    const date1 = new Date();
    const date2 = new Date(year + "-" + month + "-" + day);
    date1.setHours(0,0,0,0);
    date2.setHours(0,0,0,0);
    return  date2 >= date1;
}

export const isValidDate = date => {
    let validYear = isValidYear(date.year);
    let validMonth = isValidMonth(date.month);
    let validDay = isValidDay(date.day,date.month,date.year);
    let validDate = isCorrectDate(date.day,date.month,date.year);
    return validYear && validMonth && validDay && validDate;
}

export const getTranferDate = date => {
    const newDay = date.day <= 9 ? "0" + parseInt(date.day) : date.day;
    const newMonth = date.month <= 9 ? "0" + parseInt(date.month) : date.month;
    let newDate = new Date(date.year + "-" + newMonth + "-" + newDay + "T00:00:00.000Z");
    return newDate;
}
