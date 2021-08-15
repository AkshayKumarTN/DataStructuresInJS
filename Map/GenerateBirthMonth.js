let year = new Map([["January",0],["February",0],["March",0],["April",0],["May",0],["June",0],["July",0],["August",0],["September",0],["October",0],["November",0],["December",0]]);
let flag=0;
// Generating a birth month of 50 individuals between the year 92 & 93..........
while(flag<50)
{
    let monthName=GenerateMonth();
    let numberOfBirth=year.get(monthName);
    year.set(monthName,numberOfBirth+1);
    flag++;
}
console.log(year);

function GenerateMonth() 
{
    // Generating a birth month.....................
    var monthNumber = Math.floor(Math.random() * 12) + 1;
    switch(monthNumber){
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month";
            break;
    } 

    return monthName;
}