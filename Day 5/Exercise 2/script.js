// function leapYearChecker(year) {
//     if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
//         return true;
//     return false;
// }

function leapYearChecker(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

console.log("2020 is a leap year = " + leapYearChecker(2020));
console.log("1978 is a leap year = " + leapYearChecker(1978));
console.log("500 is a leap year = " + leapYearChecker(500));